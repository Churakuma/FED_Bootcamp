import React from "react";
import './DestinationImage.scss'

export default function DestinationImage({ 
    destinationImageAltText,
    destinationImageSrc 
}) {
    return (
        <>
            <div className="flex image-container">
                <img className="destination-image" alt={destinationImageAltText} src={destinationImageSrc}></img>
            </div>
        </>        
    )
}