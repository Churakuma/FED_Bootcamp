import React from "react";
import './TechnologyImg.scss'

export default function TechnologyImage({
    technologyImageAlt,
    TechnologyImageSrc
}) {
    return (
        <>
            <div className="flex technology-image-container">
                <img className="technology-image" alt={technologyImageAlt} src={`${TechnologyImageSrc}`}></img>
            </div>
        </>
    )
}