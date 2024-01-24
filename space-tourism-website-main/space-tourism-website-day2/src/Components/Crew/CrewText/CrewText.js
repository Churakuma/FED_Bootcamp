import React from "react";
import './CrewText.scss'

export default function CrewText ({text}) {
    return (
        <div className="crew-text-container">
            <p className="text-accent">{text}</p>
        </div>
    )
}