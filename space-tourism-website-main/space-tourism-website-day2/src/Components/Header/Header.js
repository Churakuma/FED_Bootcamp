import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg'
import './Header.scss'
import SideMenu from '../SideMenu/SideMenu';

const Header = () => {
    const [isSideMenuDisabled, setIsSideMenuDisabled] = useState(window.matchMedia('(max-width: 426px)').matches);
//TODO: Ask Gary about the behavior where 426 includes the navicon but 425px does not?
    useEffect(() => {
        const handleResize = () => {
            setIsSideMenuDisabled(window.matchMedia('(max-width: 426px)').matches);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures the effect runs only once during mount

    return (
        <>
            <header className='flex text-white uppercase ff-sans-cond letter-spacing-2'>
                <img className='logo' alt='Space Tourism Logo' src={logo}/>
                {isSideMenuDisabled ? (
                    <SideMenu></SideMenu>
                ): (
                    <div className='top-nav'>
                        <ul className='flex tabs-list'>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/destination'}>Destination</Link></li>
                            <li><Link to={'/crew'}>Crew</Link></li>
                            <li><a>Technology</a></li>
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;