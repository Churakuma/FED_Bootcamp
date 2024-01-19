import React from 'react';
import MediaQuery from 'react-responsive';
import logo from '../assets/shared/logo.svg'
import './Header.scss'
import SideMenu from '../SideMenu/SideMenu';

const Header = () => {
    return (
        <>
            {/* Mobile Styles (Default) */}
            <MediaQuery maxWidth={425}>
                <header className='flex text-white uppercase ff-sans-cond letter-spacing-2'>
                    <img className='logo' alt='Space Tourism Logo' src={logo}/>
                    <SideMenu></SideMenu>
                </header>
            </MediaQuery>

            {/* <header className='flex primary-navigation-bar text-white uppercase ff-sans-cond letter-spacing-2'>
                <img alt='Space Tourism Logo' src={logo}/>
                <ul className='flex tabs-list'>
                    <li><a>00 Home</a></li>
                    <li><a>01 Destination</a></li>
                    <li><a>02 Crew</a></li>
                    <li><a>03 Technology</a></li>
                </ul>
            </header> */}
        </>
        
    )
}

export default Header;