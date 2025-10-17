import styles from "./ServicePage.module.scss";
import services from "../menu/data/services";
import React from "react";
import {useParams} from "react-router-dom";
import Button from "../../components/button/Button";

const ServicePage = () => {
    const {serviceId} = useParams();
    const service = services.find((service) => service.link === `/services/${serviceId}`);

    return (
        <section className={styles.servicePage}>

            <div className={styles.background} style={{
                backgroundImage: `url(${service.imgUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>

                <div className={styles.container}>
                    <div className={styles.titleHome}>
                        <h2>{service.title}</h2>
                        <Button/>
                    </div>
                </div>
            </div>

            <div className={styles.description}>
                <div className={styles.title}>
                    <p>{service.description}</p>
                    <Button/>
                </div>
                <div className={styles.imageOne}>
                    <img src={service.imgOne} alt="imgOne"/>
                </div>
                <div className={styles.imageTwo}>
                    <img src={service.imgTwo} alt="imgTwo"/>
                </div>
            </div>

            <div className={styles.details}>
                <div className={styles.title}>
                    <p>{service.details}</p>
                    <Button/>
                </div>
                <div className={styles.imageThree}>
                    <img src={service.imgThree} alt="imgThree"/>
                </div>

                <div className={styles.specialists}>
                     <p>{service.specialists}</p>
                </div>
            </div>

            <div className={styles.specification}>
                <div className={styles.imageFour}>
                    <img src={service.imgFour} alt="imgFour"/>
                </div>
                <div className={styles.imageFive}>
                    <img src={service.imgFive} alt="imgFive"/>
                </div>
                <div className={styles.imageSix}>
                    <img src={service.imgSix} alt="imgSix"/>
                </div>
                <div className={styles.info}>
                    <p>{service.info}</p>

                    <Button/>

                </div>
            </div>


        </section>
    )
}
export default ServicePage;