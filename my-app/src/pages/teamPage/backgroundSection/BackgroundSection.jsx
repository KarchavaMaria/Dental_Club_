import homeBackgroundImage from '../../../assets/images/img_team_background.webp';
import styles from './BackgroundSection.module.scss';
import Button from "../../../components/button/Button";

const BackgroundSection = () => {
    return (
        <section className={styles.backgroundSection} style={{
            backgroundImage: `url(${homeBackgroundImage})`, backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', backgroundSize: 'cover'
        }}>
            <div className={styles.container}>
                <div className={styles.titleHome}>
                    <h1>КОМАНДА DENTAL CLUB</h1>
                    <Button/>
                </div>
            </div>
        </section>
    )
}
export default BackgroundSection;