import React from "react";
import './DestinationTitle.scss'

const DestinationTitle = ({destinationName}) => {
    return (
        <h2 className="uppercase text-white destination-title">{destinationName}</h2>
    )
}

export default DestinationTitle;