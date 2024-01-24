import React from "react";
import './CrewTitle.scss'

export default function CrewTitle({
    crewRole,
    crewName
}) {
    return (
        <div className="flex title-container">
            <h3 className="uppercase crew-role">{crewRole}</h3>
            <h2 className="uppercase text-white crew-name">{crewName}</h2>
        </div>
    )
}