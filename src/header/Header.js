import React from "react";
import { Link } from "react-router-dom";
import style from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideNavbar from "./sidenav/SideNav";

const Header = (props) => {

    const navbars = () => (
        <div className={style.bars}>
            <FontAwesomeIcon
                onClick = {props.onOpenNav}
                icon={faBars} style={{
                color:"#dfdfdf",
                padding:"10px",
                cursor:"pointer"
            }}/>
        </div>
    )

    const logo = () => (
            <Link to='/' className={style.logo}>
                <img alt="nba-logo" src="/images/nba_logo.png" />
            </Link>
        )

    return(
        <header className={style.header}>
            <SideNavbar {...props}/>
            <div  className={style.headerOpt}>
                {navbars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;