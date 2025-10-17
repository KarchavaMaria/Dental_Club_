import styles from "./NotFound.module.scss";
import notFound from "../../assets/icons/icons_notFound.png";

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <div className={styles.title}>
                <h1>404 </h1>
                <h2>Упс! Страница не найдена</h2>
                <p>Похоже, вы попали не туда...</p>
                <p>Такой страницы не существует, была удалена или переехала в другое место.</p>
                <p>Но не переживайте! Мы поможем вам снова улыбаться 😁 </p>
                <img src={notFound} alt="404"/>
            </div>
        </div>
    )
}
export default NotFound;