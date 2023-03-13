import React,{Component} from "react";
import styles from './videos-list.module.css';
import axios from "axios";
import { URL } from "../../../config";
import Button from "../buttons/Button";
import VideosListTemplate from "./VideosListTemplate";

class VideosList extends Component{
    state = {
        teams:[],
        videos:[],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    renderTitle = () => {
        return this.props.title ? 
            <h3><strong>NBA</strong> videos</h3>
            : null
    }

    componentWillMount(){
        this.request(this.state.start,this.state.end)
    }

    request = (start,end) => {
        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then(res => {
                this.setState({
                    teams: res.data
                })
            })
        }
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then(res => {
            this.setState({
                videos: [...this.state.videos,...res.data],
                start,
                end
            })
        })
    }

    renderVideos = () => {
        let template = null;
        switch(this.props.type){
            case ('card'):
                template = <VideosListTemplate data ={this.state.videos} teams={this.state.teams}/>
                break;
            default: 
                template = null;
        }
        return template;
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end,end)
    }

    renderButton = () => {
        return this.props.loadmore ? 
        <Button 
        type="loadmore"
        loadMore={()=>this.loadMore()}
        cta="Load More Videos"
        />
        :
        <Button type='linkTo' cta="More Videos" linkTo="/videos" />
    }

    render(){
        return(
            <div className={styles.videoList_wrapper}>
                { this.renderTitle() }
                { this.renderVideos() }
                { this.renderButton() }
            </div>
        )
    }
}

export default VideosList;
