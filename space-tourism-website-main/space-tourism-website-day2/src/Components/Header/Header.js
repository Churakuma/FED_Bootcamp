import React from 'react';
import logo from '../assets/shared/logo.svg'
import './Header.scss'

const Header = () => {
    return (
        <header className='primary-navigation-bar text-white'>
            <img alt='Space Tourism Logo' src={logo}/>
            <ul className='tabs-list'>
                <li><a>00 Home</a></li>
                <li><a>01 Destination</a></li>
                <li><a>02 Crew</a></li>
                <li><a>03 Technology</a></li>
            </ul>
        </header>
    )
}

export default Header;