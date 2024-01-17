import React from 'react';
import logo from '../assets/shared/logo.svg'

const Header = () => {
    return (
        <header>
            <img alt='Space Tourism Logo' src={logo}/>
            <ul>
                <li><a>00 Home</a></li>
                <li><a>01 Destination</a></li>
                <li><a>02 Crew</a></li>
                <li><a>03 Technology</a></li>
            </ul>
        </header>
    )
}

export default Header;