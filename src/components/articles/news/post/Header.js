import React from "react";
import TeamInfo from "../elements/TeamInfo";
import PostData from "../elements/PostData";

const Header = (props) => {
    const teamInfo = (team) =>{ 
        return team ? (
            <TeamInfo team={team} />
        ) : null;
    }

    const postData = (date,author) => (
        <PostData data={{date,author}} />
    )

    return (
        <div>
            {teamInfo(props.teamData)}
            {postData(props.date, props.author)}
        </div>
    )
}

export default Header;