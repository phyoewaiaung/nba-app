import React, {Component} from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import styles from '../../article.module.css';
import Header from './Header';

class VideosArticle extends Component{

    state = {
        article:[],
        team:[]
    }

    componentWillMount(){
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then(res => {
            let article = res.data[0];
            axios.get(`${URL}/teams?id=${article.team}`)
            .then(res => {
                this.setState({
                    article,
                    team:res.data
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
            </div>
        )
    }
}

export default VideosArticle