import contactsBackgroundImage from '../../../assets/images/img_contacts_background.jpg';
import styles from './BackgroundSection.module.scss';
import Button from "../../../components/button/Button";

const BackgroundSection = () => {
    return (
        <section className={styles.backgroundSection} style={{
            backgroundImage: `url(${contactsBackgroundImage})`, backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', backgroundSize: 'cover'
        }}>
            <div className={styles.container}>
                <div className={styles.titleHome}>
                    <h1>КОНТАКТЫ</h1>
                    <Button/>
                </div>
            </div>
        </section>
    )
}
export default BackgroundSection;