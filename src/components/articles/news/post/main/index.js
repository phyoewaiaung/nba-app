import React from "react";
import NewsSlider from "../../../../widgets/news-slider/NewsSlider";
import NewsList from "../../../../widgets/news-list/newsList";


const NewsMain = () => (
    <div>
        <NewsSlider 
            type = "featured"
            settings = {{dots:false}}
            start = {0}
            amount = {3}
        />
        <NewsList 
            type = "cardMain"
            loadMore = {true}
            start = {3}
            amount = {10}
        />
    </div>
)

export default NewsMain