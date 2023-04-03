import React, {Component} from 'react';
import { firebaseDB, firebaseLooper, firebaseTeams } from '../../../../firebase';
import styles from '../../article.module.css';
import Header from './Header';

class NewsArticle extends Component{

    state = {
        article: [],
        team: []
    }

    componentWillMount(){
        // axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        // .then(res => {
        //     let article = res.data[0];
        //     axios.get(`${URL}/teams?id=${article.team}`)
        //     .then(res => {
        //         this.setState({
        //             article,
        //             team:res.data
        //         })
        //     })

        // })

        firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
        .then((snapshot)=> {
            let article = snapshot.val();
            firebaseTeams.orderByChild("teamId").equalTo(article.team).once('value')
            .then((snapshot) => {
                const team = firebaseLooper(snapshot);
                this.setState({
                    article,
                    team
                })
            })
        })
    }
    render() {
        const article = this.state.article;
        const team = this.state.team;
        return(
            <div className={styles.article_wrapper}>
                <Header 
                    teamData ={team[0]}
                    date = {article.date}
                    author = {article.author}
                />
                <div className={styles.article_body}>
                    <h1>{article.title}</h1>
                    <div className={styles.article_image} style={{background:`url(/images/articles/${article.image})`}}></div>
                    <div className={styles.article_text}>
                        {article.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsArticle;