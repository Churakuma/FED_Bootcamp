import React from "react";
import './CrewImage.scss'

export default function CrewImage({
    crewImageAltText,
    crewImageSrc
}) {
    return (
        <>
            <div className="flex crew-image-container">
                <img className="crew-image" alt={crewImageAltText} src={`${crewImageSrc}`}></img>
            </div>
        </>
    )
}