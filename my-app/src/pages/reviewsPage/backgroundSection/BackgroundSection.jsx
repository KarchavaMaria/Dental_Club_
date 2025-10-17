import reviewsBackgroundImage from '../../../assets/images/img_reviews_background.jpg';
import styles from './BackgroundSection.module.scss';
import {useState} from "react";
import Modal from "../aboutsClinicSection/modal/Modal";

const BackgroundSection = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className={styles.backgroundSection} style={{
            backgroundImage: `url(${reviewsBackgroundImage})`, backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', backgroundSize: 'cover'
        }}>

            <div className={styles.container}>
                <div className={styles.titleHome}>
                    <h1>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h1>
                    <button onClick={()=>setOpenModal(true)}>ОТПРАВИТЬ СВОЙ ОТЗЫВ</button>
                </div>
                <Modal isOpen={openModal} onClose={()=>setOpenModal(false)}>
                </Modal>
            </div>
        </section>
    )
}
export default BackgroundSection;