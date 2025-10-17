import reviews from "../data/reviews";
import styles from "./ReviewsSection.module.scss";

const ReviewsSection = () => {
    return (
        <section className={styles.reviewsSection}>
            <div className={styles.reviewsLists}>
                {
                    reviews.map((review, id) => (
                        <div className={styles.reviewsCart}>
                            <div className={styles.image}>
                                <img src={review.imgUrl} alt={review.fullName}/>
                            </div>
                            <div className={styles.description}>
                                <p>{review.fullName}</p>
                                <p>{review.professional}</p>
                                <p>{review.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default ReviewsSection;