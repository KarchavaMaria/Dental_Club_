import teams from '../../data/team.js';
import TeamDetailsCard from "../teamDetailsCard/TeamDetailsCard";
import {useParams} from "react-router-dom";

const TeamDetails = () => {
    const {id} = useParams();
    const team = teams.find((team) => String(team.id) === String(id));

    return (
        <div>
            <TeamDetailsCard team={team} />
        </div>
    )
}
export default TeamDetails;