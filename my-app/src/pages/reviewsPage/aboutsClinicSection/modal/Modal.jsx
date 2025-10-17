import styles from './Modal.module.scss';
import FormSection from "../../../formSection/FormSection";
import ReactDOM from "react-dom";
import {useEffect} from "react";

const Modal = ({isOpen, onClose}) => {

    useEffect(() => {
        const keyDownHandler = (e) => {
            if(e.key === "Escape"){
                onClose()
            }
        }
        if(isOpen)document.addEventListener("keydown", keyDownHandler);
    }, [isOpen]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.content}>
                    <button className={styles.onClose} onClick={onClose}>X</button>
                      <div className={styles.title}>
                          <h2>НАПИШИТЕ СВОЙ ОТЗЫВ</h2>
                      </div>
                      <div style={styles.form}>
                          <FormSection/>
                      </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}
export default Modal;