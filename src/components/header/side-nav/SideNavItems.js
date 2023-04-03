import React from "react";
import { Link,withRouter } from "react-router-dom";
import styles from './sidenav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faNewspaper,faVideo,faSignIn,faSignOut } from "@fortawesome/free-solid-svg-icons";
import { firebase } from "../../../firebase";

const SideNavItems = (props) => {
    const items = [
        {
            type: styles.option,
            icon:faHome,
            text:"Home",
            link: '/',
            login:''
        },
        {
            type: styles.option,
            icon:faNewspaper,
            text:"News",
            link: '/news',
            login:''
        },
        {
            type: styles.option,
            icon:faVideo,
            text:"Videos",
            link: '/videos',
            login:''
        },
        {
            type: styles.option,
            icon:faVideo,
            text:"Dashboard",
            link: '/dashboard',
            login:false
        },
        {
            type: styles.option,
            icon:faSignIn,
            text:"Sign In",
            link: '/sign-in',
            login:true
        },
        {
            type: styles.option,
            icon:faSignOut,
            text:"Sign Out",
            link: '/sign-out',
            login:false
        }
    ]

    const element = (item,i) => (
            <div key={i} className={item.type}>
                <Link to={item.link}>
                    <FontAwesomeIcon icon={item.icon} />{item.text}
                </Link>
            </div>
    )

    const restricted = (item,i) => {
        let template = null;

        if(props.user === null && item.login){
            template = element(item,i)
        }
        if(props.user !== null && !item.login){
            if(item.link === '/sign-out'){
                template = (
                    <div key={i} className={item.type} onClick={()=>{
                        firebase.auth().signOut()
                        .then(()=> {
                            props.history.push('/')
                        })
                        }}>
                            <FontAwesomeIcon icon={item.icon} />{item.text}
                    </div>
                )
            }else{
                template = element(item,i)
            }
        }
        return template;
    }

    const showItems = () => {
        return items.map((item,i) => {
            return item.login !== '' ? 
                restricted(item,i)
            : 
                element(item,i)

        })
    }

    return(
        <div>
            {showItems()}
        </div>
    )
}

export default withRouter(SideNavItems);