import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return(
    <ul className="list-group">
    {
        who.map(who=> {
            return(
                <WhoToFollowListItem who={who}/>);
    })
    }
    </ul>
);

}
export default WhoToFollowList;