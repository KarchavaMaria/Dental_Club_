import logo from '../../assets/icons/icons_logo_gray.svg';
import instagram from '../../assets/icons/icons_instagram.png';
import vk from '../../assets/icons/icons_vk.png';
import whatsapp from '../../assets/icons/icons_whats-app.png';
import youtube from '../../assets/icons/icons_youtube.png';
import {Link, NavLink} from "react-router-dom";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <hr style={{width: '85%', height: '100%', color: '#D4D4D4'}}/>
            <div className={styles.navBar}>
                <NavLink to="/">ГЛАВНАЯ</NavLink>
                <NavLink to="/menu">УСЛУГИ</NavLink>
                <NavLink to="/team">КОМАНДА</NavLink>
                <NavLink to="/reviews">ОТЗЫВЫ</NavLink>
                <NavLink to="/contacts">КОНТАКТЫ</NavLink>
            </div>
            <hr style={{width: '85%', height: '100%', color: '#D4D4D4'}}/>
            <div className={styles.navSocial}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram}
                                                                                               alt="instagram"/></a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer"><img src={vk}
                                                                                               alt="vk"/></a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><img src={whatsapp}
                                                                                             alt="whatsapp"/></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src={youtube}
                                                                                        alt="youtube"/></a>
            </div>
        </footer>
    )
}
export default Footer;