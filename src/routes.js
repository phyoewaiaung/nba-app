import React, {Component} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./hoc/layout/Layout";

class HomeRoutes extends Component {
    render() {
        return(
            <Layout>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </Layout>
        )
    }
}

export default HomeRoutes;