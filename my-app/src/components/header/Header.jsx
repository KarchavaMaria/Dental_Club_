import logo from '../../assets/icons/icons_logo_white.svg';
import prev from '../../assets/icons/icons_prev.png';
import menuBar from '../../assets/icons/icons_menu_bar.svg';
import styles from './Header.module.scss';
import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    function openMenuHandler() {
        navigate("/menu");
    }

    if (location.pathname === "/menu") {
        return null;
    }

    return (
        <header className={styles.header}>

            <div className={styles.menu_bar}>
                <button className={styles.btnPrev} onClick={() => navigate(-1)}><img src={prev} alt="<"/></button>

                <button onClick={openMenuHandler}>
                    <img src={menuBar} alt="menuBar"/>
                    <p>МЕНЮ</p>
                </button>
            </div>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
        </header>
    )
}
export default Header;