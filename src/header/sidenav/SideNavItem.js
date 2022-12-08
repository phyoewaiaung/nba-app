import React from "react";
import style from './sidenav.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faNewspaper,faVideo,faSignIn,faSignOut } from "@fortawesome/free-solid-svg-icons";

const SideNavItems = () => {

    const items = [
        {
            type:style.option,
            icon:faHome,
            text:'Home',
            link:'/'
        },
        {
            type:style.option,
            icon:faNewspaper,
            text:'News',
            link:'/news'
        },
        {
            type:style.option,
            icon:faVideo,
            text:'Videos',
            link:'/videos'
        },
        {
            type:style.option,
            icon:faSignIn,
            text:'Sign In',
            link:'/sign-in'
        }
        ,
        {
            type:style.option,
            icon:faSignOut,
            text:'Sign Out',
            link:'/sign-out'
        }
    ]

    const showItems = () => {
        return items.map((item,index) => {
            return(
                <div key={index} className={item.type}>
                    <Link to='/'>
                        <FontAwesomeIcon className={style.homeSvg} icon={item.icon} /> {item.text}
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