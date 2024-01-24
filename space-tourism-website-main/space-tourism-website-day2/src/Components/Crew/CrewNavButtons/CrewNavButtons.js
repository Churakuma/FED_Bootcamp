import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CrewNavButtons.scss'

const CrewNavButton = ({ crewMember, setCrewMember }) => {
    const tabsList = [0, 1, 2, 3];
    // const [activeTab, setActiveTab] = useState(tabsList[0])    

    // const handleClick = (tab) => {
    //     setActiveTab(tab)
    // }

    console.log(crewMember)

    return (
        <div className="navigation-button">
            <Link
                to={'/crew'}
                className={`circle ${crewMember === tabsList[0] ? 'active' : ''}`}
                onClick={() => setCrewMember(tabsList[0])}
            ></Link>
            <Link
                to={'/crew-mark-shuttleworth'}
                className={`circle ${crewMember === tabsList[1] ? 'active' : ''}`}
                onClick={() => setCrewMember(tabsList[1])}
            ></Link>
            <Link
                to={'/crew-victor-glover'}
                className={`circle ${crewMember === tabsList[2] ? 'active' : ''}`}
                onClick={() => setCrewMember(tabsList[2])}
            ></Link>
            <Link
                to={'/crew-anousheh-ansari'}
                className={`circle ${crewMember === tabsList[3] ? 'active' : ''}`}
                onClick={() => setCrewMember(tabsList[3])}
            ></Link>
         </div>
    )
}

export default CrewNavButton;