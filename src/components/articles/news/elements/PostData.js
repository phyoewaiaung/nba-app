import React from "react";
import styles from '../../article.module.css'
import moment from "moment";

const formatDate = (date) => {
    return moment(date).format(' MM-DD-YYYY');
}
const PostData = props => (
    <div className={styles.article_post_data}>
        <div>
            Date:
            <span>{formatDate(props.data.date)}</span>
        </div>
        <div>
            Author:
            <span>{props.data.author}</span>
        </div>
    </div>
)

export default PostData;