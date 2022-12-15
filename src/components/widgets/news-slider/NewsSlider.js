import React,{Component} from "react";
import axios from "axios";
import SliderTemplates from "./SliderTemplate";

class NewsSlider extends Component {

    state = {
        news: []
    }

    componentWillMount(){
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
        .then( res => {
            this.setState({
                news: res.data
            })
        });
    }


    render(){
        return(
           <SliderTemplates />
        )
    }
}

export default NewsSlider;