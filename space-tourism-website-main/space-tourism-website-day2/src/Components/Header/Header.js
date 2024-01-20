import React, { useState, useEffect } from 'react';
import logo from '../assets/shared/logo.svg'
import './Header.scss'
import SideMenu from '../SideMenu/SideMenu';

// const Header = () => {
//     const isSideMenuDisabled = window.matchMedia('(max-width: 425px)').matches
//     if (isSideMenuDisabled) {
//     }
//     return (
//         <>
//             <header className='flex text-white uppercase ff-sans-cond letter-spacing-2'>
//                 <img className='logo' alt='Space Tourism Logo' src={logo}/>
//                 {isSideMenuDisabled ? (
//                     <SideMenu></SideMenu>
//                 ): (
//                     <div></div>
//                 )}

//             </header>
//         </>
//     )
// }

// export default Header;

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
                    <div></div>
                )}
            </header>
        </>
    );
}

export default Header;
