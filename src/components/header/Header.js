import React from "react";
import { Link } from "react-router-dom";
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SideNavigation from "./side-nav/SideNav";

const Header = (props) => {

    const navbars = () => (
        <div className={styles.bars}>
            <FontAwesomeIcon icon={faBars} 
            onClick={props.onOpenNav}
            style={{
                color:'#dfdfdf',padding:"10px",cursor:"pointer"
            }}
            />
        </div>
    )

    const logo = () => (
            <Link to='/' className={styles.logo}>
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
        )

    return(
        <header className={styles.header}>
            <SideNavigation {...props}/>
            <div className={styles.headerOpt}>
                {navbars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header