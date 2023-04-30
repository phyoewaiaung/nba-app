import React from "react";
import { Switch } from "react-router-dom";
import Home from './components/home/Home'
import Layout from './hoc/layout/Layout'
import NewsArticle from "./components/articles/news/post";
import VideosArticle from "./components/articles/videos/video";
import NewsMain from "./components/articles/news/post/main";
import VideosMain from "./components/articles/videos/main";
import SignIn from "./components/signin/SignIn";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/auth-routes/PrivateRoute";
import PublicRoute from "./components/auth-routes/PublicRoute";

const HomeRoutes = (props) => {
        return(
            <Layout user={props.user}>
                <Switch>
                    <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
                    <PublicRoute {...props} restricted={false} path="/news" exact component={NewsMain} />
                    <PublicRoute {...props} restricted={false} path="/articles/:id" exact component={NewsArticle} />
                    <PublicRoute {...props} restricted={false} path="/videos/:id" exact component={VideosArticle} />
                    <PublicRoute {...props} restricted={false} path="/videos" exact component={VideosMain} />
                    <PublicRoute {...props} restricted={true} path="/sign-in" exact component={SignIn}/>
                    <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
                </Switch>
            </Layout>
        )
}
 export default HomeRoutes;