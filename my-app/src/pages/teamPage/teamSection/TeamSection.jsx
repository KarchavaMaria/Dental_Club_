import teams from '../data/team';
import styles from './TeamSection.module.scss';
import {useNavigate} from "react-router-dom";

const TeamSection = () => {
    const navigate = useNavigate();

    function teamDetailsHandler(id) {
        navigate(`/team/${id}`);
    }

    return (
        <section className={styles.teamSection}>
            <div className={styles.employees}>
                {
                    teams.map((team) =>
                        <div className={styles.employee} key={team.id} onClick={() => teamDetailsHandler(team.id)}>
                            <img src={team.imgUrl} alt={team.name}/>
                            <div className={styles.title}>
                                <p className={styles.name}>{team.name}</p>
                                <p className={styles.speciality}>{team.speciality}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
export default TeamSection;