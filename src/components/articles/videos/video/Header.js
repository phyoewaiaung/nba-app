import React from "react";
import TeamInfo from "../../news/elements/TeamInfo";

const Header = props => {

    const teamInfo = team => {
        return team?
            <TeamInfo team={team}/>
        :
            null;
    }

    return(
        <div>
            {teamInfo(props.teamData)}
        </div>
    )
}

export default Header