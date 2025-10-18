import {NavLink, useNavigate} from "react-router-dom";
import styles from "./Menu.module.scss";
import backgroundImage from "../../assets/images/img_menu_background.webp"
import React, {useState} from "react";
import services from "./data/services";
import prev from "../../assets/icons/icons_prev.png";

const Menu = () => {
    const navigate = useNavigate();
    const [showServices, setShowServices] = useState(false);
    const [selected, setSelected] = useState(null);

    function openServicesHandler() {
        setShowServices(true);
    }

    function closeServicesHandler() {
        setShowServices(false);
        setSelected(null);
    }

    return (

        <div className={styles.menu} >

            <div className={styles.menuPanel}>
                <div className={styles.close}>
                    <button onClick={() => navigate("/")}>X</button>
                </div>
                {showServices ? (
                    <div className={styles.btnMenu}>
                        <button className={styles.btnPrev} onClick={closeServicesHandler}><img src={prev} alt="<"/>УСЛУГИ</button>
                        {services.map((service) => (
                            <button className={styles.btnMenuActive} key={service.id}
                                    onClick={() => setSelected(service)}>{service.title}</button>
                        ))}
                    </div>
                ) : (
                    <div className={styles.btnMenu}>
                        <NavLink to="/">ГЛАВНАЯ</NavLink>
                        <button onClick={openServicesHandler}>УСЛУГИ</button>
                        <NavLink to="/team">КОМАНДА</NavLink>
                        <NavLink to="/reviews">ОТЗЫВЫ</NavLink>
                        <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                    </div>
                )}
            </div>
            {selected ? (
                    <div className={styles.serviceContent} style={{
                        backgroundImage: `url(${selected.imgUrl})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}>
                        <div className={styles.title}>
                            <h2>{selected.title}</h2>
                            <button onClick={() => navigate(selected.link)}>Подробнее</button>
                        </div>
                    </div>
                ) : (
                <div className={styles.menu} style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}></div>

            ) }
        </div>
    )
}
export default Menu;