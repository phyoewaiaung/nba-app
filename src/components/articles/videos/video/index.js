import React, {Component} from 'react';
import { firebaseDB, firebaseLooper, firebaseTeams, firebaseVideos } from '../../../../firebase';
import styles from '../../article.module.css';
import Header from './Header';
import VideosRelated from '../../../widgets/videos-list/videos-related/VideosRelated';

class VideosArticle extends Component{

    state = {
        article: [],
        team: [],
        teams: [],
        related: []
    }

    UNSAFE_componentWillMount(){
        // axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        // .then(res => {
        //     let article = res.data[0];
        //     axios.get(`${URL}/teams?id=${article.team}`)
        //     .then(res => {
        //         this.setState({
        //             article,
        //             team:res.data
        //         });
        //         this.getRelatedData()
        //     })

        // })
        firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
        .then((snapshot)=> {
            let article = snapshot.val();
            firebaseTeams.orderByChild("teamId").equalTo(article.team).once('value')
            .then((snapshot) => {
                const team = firebaseLooper(snapshot);
                this.setState({
                    article,
                    team
                })
                this.getRelatedData()
            })
        })
    }

    getRelatedData = () => {
        firebaseTeams.once('value')
        .then((snapshot)=> {
            const teams = firebaseLooper(snapshot);

            firebaseVideos.orderByChild("team").equalTo(this.state.article.team)
            .limitToFirst(3).once('value')
            .then((snapshot)=> {
                const related = firebaseLooper(snapshot);

                this.setState({
                    teams,
                    related
                })
            })
        })
        // axios.get(`${URL}/teams`)
        // .then(res => {
        //     let teams = res.data;
        //     axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
        //     .then(res => {
        //         this.setState({
        //             teams,
        //             related: res.data
        //         })
        //     })
        // })
    }

    render(){
        const article = this.state.article;
        const team = this.state.team;

        return(
            <div>
                <Header teamData={team[0]}/>
                <div className={styles.video_wrapper}>
                    <h1>{article.title}</h1>
                    <iframe 
                        titile = "videoplayer"
                        width = "100%"
                        height="300px"
                        src={`https://www.youtube-nocookie.com/embed/${article.url}`}
                    />
                </div>
                <VideosRelated 
                data = {this.state.related}
                teams = {this.state.teams}
                />
            </div>
        )
    }
}

export default VideosArticle