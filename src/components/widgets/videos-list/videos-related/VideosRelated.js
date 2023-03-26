import React from "react";
import styles from '../videos-list.module.css'
import VideosListTemplate from '../VideosListTemplate'

const VideosRelated  = (props) => (
    <div className={styles.related_wrapper}>
        <VideosListTemplate 
            data = {props.data}
            teams = {props.teams}
        />
    </div>
)
export default VideosRelated