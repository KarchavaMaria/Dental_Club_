import styles from './TeamDetailsCard.module.scss';
import Button from "../../../../components/button/Button";

const TeamDetailsCard = ({team}) => {

    return (
        <section className={styles.teamDetails}>
            <div className={styles.cardTeamDetails}>
                <div className={styles.teamImg}>
                    <img src={team.imgUrl} alt={team.name}/>
                </div>
                <div className={styles.teamSummary}>
                    <div>
                        <p>{team.speciality}</p>
                    </div>
                    <div>
                        <h3>{team.name}</h3>
                    </div>
                    <div>
                        <span>Специализация:</span>
                        <p>{team.specialization}</p>
                    </div>
                    <div>
                        <span>Образование:</span>
                        <p>{team.education}</p>
                    </div>
                    <div>
                        <span>Опыт работы:</span>
                        <p>{team.experience}</p>
                    </div>
                    <div>
                        <span>Усовершенствования:</span>
                        <p>{team.improvements}</p>
                    </div>
                    <div>
                        <span>Время приема:</span>
                        <p>{team.receptionTime}</p>
                    </div>
                    <Button/>
                </div>
            </div>
        </section>
    )
}
export default TeamDetailsCard;