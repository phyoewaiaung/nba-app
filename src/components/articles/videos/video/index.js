import React, {Component} from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
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
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then(res => {
            let article = res.data[0];
            axios.get(`${URL}/teams?id=${article.team}`)
            .then(res => {
                this.setState({
                    article,
                    team:res.data
                });
                this.getRelatedData()
            })

        })
    }

    getRelatedData = () => {
        axios.get(`${URL}/teams`)
        .then(res => {
            let teams = res.data;
            axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
            .then(res => {
                this.setState({
                    teams,
                    related: res.data
                })
            })
        })
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