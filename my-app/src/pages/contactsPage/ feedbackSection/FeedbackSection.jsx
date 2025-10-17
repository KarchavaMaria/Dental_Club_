import styles from './FeedbackSection.module.scss';
import FormSection from "../../formSection/FormSection";

const FeedbackSection = () => {

    return (
        <section className={styles.feedbackSection}>
            <div className={styles.containerLeft}>
                <h2>ОБРАТНАЯ СВЯЗЬ</h2>
            </div>
            <div className={styles.containerRight}>
              <FormSection/>
            </div>
        </section>
    )
}
export default FeedbackSection;