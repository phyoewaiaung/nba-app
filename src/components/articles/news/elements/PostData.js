import React from "react";
import styles from '../../article.module.css'

const PostData = props => (
    <div className={styles.article_post_data}>
        <div>
            Date:
            <span>{props.data.date}</span>
        </div>
        <div>
            Author:
            <span>{props.data.author}</span>
        </div>
    </div>
)

export default PostData;