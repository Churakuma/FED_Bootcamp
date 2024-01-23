import React from "react";
import './DestinationText.scss'

const DestinationText = ({text}) => {
    return (
        <div className="destination-text-container">
            <p className="text-accent">{text}</p>
        </div>
    )
}

export default DestinationText;