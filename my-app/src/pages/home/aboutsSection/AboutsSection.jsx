import styles from './AboutsSection.module.scss';
import imgOne from '../../../assets/images/img_abouts_clinic_one.png';
import imgTwo from '../../../assets/images/img_abouts_clinic_two.png';
import Button from "../../../components/button/Button";

const AboutsSection = () => {
    return (
        <section className={styles.aboutsSection}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>КЛИНИКА <br/> DENTAL CLUB</h2>
                </div>
                <div className={styles.description}>
                    <p>Первая клиника в Казахстане, предоставляющая
                        полный спектр стоматологических услуг на европейском уровне.
                        Мы используем передовое оборудование и digital технологии.
                    </p>
                    <Button/>
                </div>
            </div>
            <div className={styles.containerImg}>
                <div className={styles.containerImgOne}>
                    <img src={imgOne} alt="imgOne"/>
                </div>
                <div className={styles.containerImgTwo}>
                    <img src={imgTwo} alt="imgTwo"/>
                </div>
            </div>
        </section>
    )
}
export default AboutsSection;