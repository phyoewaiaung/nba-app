import React from "react";
import { Link } from "react-router-dom";
import style from './footer.module.css';
import { current_year } from "../../helper";

const Footer = () => {
    return (
        <div className={style.footer}>
            <Link to='/' className={style.logo} >
                <img alt="nba-logo" src="/images/nba_logo.png" />
            </Link>
            <div className={style.right}>
                @NBA {current_year} All rights reserved.
            </div>
        </div>
    )
}

export default Footer;