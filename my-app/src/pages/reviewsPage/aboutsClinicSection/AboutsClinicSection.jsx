import styles from './AboutsClinicSection.module.scss';
import {useState} from "react";
import Modal from "./modal/Modal";

const AboutsClinicSection = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className={styles.aboutsClinicSection}>
            <div className={styles.title}>
                <h2>КЛИНИКА <br/> DENTAL CLUB</h2>
            </div>

            <div className={styles.description}>
                <p>Клиника Dental Club работает по европейским стандартам и уделяет особое внимание / инвестирует в
                    обучение и профессиональный рост своих сотрудников.</p>
                <p>Наши принципы: гарантировать пациентам лучшее лечение, а сотрудникам – лучшие условия труда и
                    профессиональное развитие.</p>
                <p>Если Вы хотите стать частью дружной команды и реализоваться как профессионал, присылайте Ваше резюме
                    на почту</p>
                <button onClick={()=>setOpenModal(true)}>dentalclubreception@gmail.com</button>
            </div>
            <Modal isOpen={openModal} onClose={()=>setOpenModal(false)}>
            </Modal>
        </section>
    )
}
export default AboutsClinicSection;