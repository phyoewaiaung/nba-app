import React , {Component} from "react";
import { Route,Switch } from "react-router-dom";
import Home from './components/home/Home'
import Layout from './hoc/layout/Layout'
import NewsArticle from "./components/articles/news/post";
import VideosArticle from "./components/articles/videos/video";

class HomeRoutes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/articles/:id" exact component={NewsArticle} />
                    <Route path="/videos/:id" exact component={VideosArticle} />
                </Switch>
            </Layout>
        )
    }
}
 export default HomeRoutes;