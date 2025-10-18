import styles from './AdvantagesSection.module.scss';
import imgThree from '../../../assets/images/img_abouts_clinic_three.png';
import imgFour from '../../../assets/images/img_abouts_clinic_four.webp';
import Button from "../../../components/button/Button";

const AdvantagesSection = () => {
    return (
        <section className={styles.AdvantagesSection}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>НАШИ <br/> ПРЕИМУЩЕСТВА</h2>
                </div>
                <div className={styles.description}>
                    <p>Оборудование и материалы от ведущих мировых брендов.
                    Профессионалы, владеющие самыми современными методиками и способные в минимальные сроки решить задачи любой сложности.
                    Надежность и гарантии.
                    Абсолютная уверенность в результатах лечения.
                    Индивидуальный подход и экономия времени пациента.
                    Безупречный сервис и интерьер, в котором приятно находиться.</p>
                    <Button/>
                </div>
            </div>
            <div className={styles.containerImg}>
                <div className={styles.containerImgThree}>
                    <img src={imgThree} alt="{imgThree"/>
                </div>
                <div className={styles.containerImgFour}>
                    <img src={imgFour} alt="imgFour"/>
                </div>
            </div>
        </section>
    )
}
export default AdvantagesSection;