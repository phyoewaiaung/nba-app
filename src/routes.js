import React , {Component} from "react";
import { Route,Switch } from "react-router-dom";
import Home from './components/home/Home'
import Layout from './hoc/layout/Layout'
import NewsArticle from "./components/articles/news/post";
import VideosArticle from "./components/articles/videos/video";
import NewsMain from "./components/articles/news/post/main";
import VideosMain from "./components/articles/videos/main";

class HomeRoutes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" exact component={NewsMain} />
                    <Route path="/articles/:id" exact component={NewsArticle} />
                    <Route path="/videos/:id" exact component={VideosArticle} />
                    <Route path="/videos" exact component={VideosMain} />
                </Switch>
            </Layout>
        )
    }
}
 export default HomeRoutes;