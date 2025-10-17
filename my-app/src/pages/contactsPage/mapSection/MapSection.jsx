import imgOne from "../../../assets/images/img_contacts_one.jpg";
import styles from "./MapSection.module.scss";

const MapSection = () => {
    return (
        <section className={styles.mapSection}>
            <div className={styles.iframe}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44714.33297231207!2d36.17982387542727!3d50.006428898768156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0c4c4ff8113%3A0xe82c663dda7dec03!2z0KHQotCe0JzQkNCi0J7Qm9Ce0JPQhtCvINCQ0J7QodCi0JA!5e1!3m2!1sru!2sua!4v1757690399211!5m2!1sru!2sua"
                    width="500" height="400" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={styles.image}>
                <img src={imgOne} alt="imgOne"/>
            </div>
        </section>
    )
}
export default MapSection;