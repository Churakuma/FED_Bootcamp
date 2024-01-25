import React from "react";
import './CrewNavButtons.scss'

const CrewNavButton = ({ crewMember, setCrewMember }) => {
    const tabsList = [0, 1, 2, 3];

    return (
        <div className="navigation-button">
            <button
                to={'/crew'}
                className={`circle ${crewMember === tabsList[0] ? 'active' : ''}`}
                onClick={() => setCrewMember(tabsList[0])}
            ></button>
            <button
                to={'/crew-mark-shuttleworth'}
                className={`circle ${crewMember === tabsList[1] ? 'active' : ''}`}
                onClick={() => setCrewMember(tabsList[1])}
            ></button>
            <button
                to={'/crew-victor-glover'}
                className={`circle ${crewMember === tabsList[2] ? 'active' : ''}`}
                onClick={() => setCrewMember(tabsList[2])}
            ></button>
            <button
                to={'/crew-anousheh-ansari'}
                className={`circle ${crewMember === tabsList[3] ? 'active' : ''}`}
                onClick={() => setCrewMember(tabsList[3])}
            ></button>
         </div>
    )
}

export default CrewNavButton;