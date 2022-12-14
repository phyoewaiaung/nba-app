import React from "react";
import { Link } from "react-router-dom";
import styles from './sidenav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faNewspaper,faVideo,faSignIn,faSignOut } from "@fortawesome/free-solid-svg-icons";

const SideNavItems = () => {

    const items = [
        {
            type: styles.option,
            icon:faHome,
            text:"Home",
            link: '/'
        },
        {
            type: styles.option,
            icon:faNewspaper,
            text:"News",
            link: '/news'
        },
        {
            type: styles.option,
            icon:faVideo,
            text:"Videos",
            link: '/videos'
        },
        {
            type: styles.option,
            icon:faSignIn,
            text:"Sign In",
            link: '/sign-in'
        },
        {
            type: styles.option,
            icon:faSignOut,
            text:"Sign Out",
            link: '/sign-out'
        }
    ]

    const showItems = () => {
        return items.map((item,i) => {
            return(
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesomeIcon icon={item.icon} />{item.text}
                    </Link>
                </div>
            )
        })
    }

    return(
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems;