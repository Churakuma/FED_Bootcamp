import React from "react";
import { Link } from 'react-router-dom';
import './LargeButton.scss'

const LargeButton = () => {
    return (
        <Link className="large-button uppercase ff-serif text-dark bg-white " to={'/destination'}>Explore</Link>
    )
}

export default LargeButton;