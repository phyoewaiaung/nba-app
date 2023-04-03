import React from "react";
import { Route,Switch } from "react-router-dom";
import Home from './components/home/Home'
import Layout from './hoc/layout/Layout'
import NewsArticle from "./components/articles/news/post";
import VideosArticle from "./components/articles/videos/video";
import NewsMain from "./components/articles/news/post/main";
import VideosMain from "./components/articles/videos/main";
import SignIn from "./components/signin/SignIn";
import Dashboard from "./components/dashboard/Dashboard";

const HomeRoutes = (props) => {
        return(
            <Layout user={props.user}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" exact component={NewsMain} />
                    <Route path="/articles/:id" exact component={NewsArticle} />
                    <Route path="/videos/:id" exact component={VideosArticle} />
                    <Route path="/videos" exact component={VideosMain} />
                    <Route path="/sign-in" exact component={SignIn}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                </Switch>
            </Layout>
        )
}
 export default HomeRoutes;