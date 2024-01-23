import React from "react";
import './DestinationData.scss'

const DestinationData = ({
    subheadingOne,
    subheadingTwo
}) => {
    return (
        <div className="destination-subheading-container">
            <h3 className="destination-subheading-one text-accent uppercase">{subheadingOne}</h3>
            <h4 className="destination-subheading-two text-white uppercase">{subheadingTwo}</h4>
        </div>
    )
}

export default DestinationData;