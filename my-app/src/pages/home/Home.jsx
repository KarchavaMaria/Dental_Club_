import BackgroundSection from "./backgroundSection/BackgroundSection";
import AboutsSection from "./aboutsSection/AboutsSection";
import styles from "./Home.module.scss";
import AdvantagesSection from "./advantagesSection/AdvantagesSection";

const Home = () => {
    return (
        <div className={styles.home}>
            <BackgroundSection/>
            <AboutsSection/>
            <AdvantagesSection/>
        </div>
    )
}
export default Home;