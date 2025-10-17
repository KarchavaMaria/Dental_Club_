import instagram from "../../../assets/icons/icons_instagram.png";
import vk from "../../../assets/icons/icons_vk.png";
import whatsapp from "../../../assets/icons/icons_whats-app.png";
import youtube from "../../../assets/icons/icons_youtube.png";
import styles from "./ContactUsSection.module.scss";
import Button from "../../../components/button/Button";

const ContactUsSection = () => {
    return (
        <section className={styles.contactUsSection}>
            <div className={styles.containerLeft}>
                <h2>СВЯЗАТЬСЯ С НАМИ</h2>
                <div className={styles.tel}>
                    <p>+38 (093) 412 34 78 </p>
                    <p>+38 (067) 435 24 56</p>
                </div>
                <div className={styles.address}>
                    <p>02221, м. Київ, вул. Закревського, 41</p>
                </div>
                <div className={styles.schedule}>
                    <p>Пн - Пт: 10.00 - 19.00 </p>
                </div>
                <div className={styles.email}>
                    <p>dentalclubreception@gmail.com</p>
                </div>
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
            </div>
            <div className={styles.containerRight}>
                <Button/>
            </div>
        </section>
    )
}
export default ContactUsSection;
