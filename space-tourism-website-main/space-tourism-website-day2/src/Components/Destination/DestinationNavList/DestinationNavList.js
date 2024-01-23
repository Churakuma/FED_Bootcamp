import React from "react";
import './DestinationNavList.scss'
import { Link } from 'react-router-dom';

const DestinationNavList = () => {
    return (
        <div>
            <ul className="flex navList">
                <li><Link to={'/destination'} className="text-accent navList-Link">Moon</Link></li>
                <li><Link to={'/destination-mars'} className="text-accent navList-Link">Mars</Link></li>
                <li><Link to={'/destination-europa'} className="text-accent navList-Link">Europa</Link></li>
                <li><Link to={'/destination-titan'} className="text-accent navList-Link">Titan</Link></li>
            </ul>
        </div>
    )
}

export default DestinationNavList;