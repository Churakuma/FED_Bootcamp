import React from "react";
import './Subtitle.scss'

const Subtitle = ({ pageNumber, subtitleText }) => {
    return(
        <>
            <div className="flex">
                <h5 className="page-counter">{pageNumber}</h5>
                <h5 className="subtitle-text">{subtitleText}</h5>
            </div>        
        </>
    )
}

export default Subtitle;