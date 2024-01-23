import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Subtitle from '../Subtitle/Subtitle';
import DouglasHurleyImg from '../assets/crew/image-douglas-hurley.png'
import './Crew.scss'

const Destination = ({destination}) => {
    
    const [isDisplayVertical, setIsDisplayVertical] = useState(window.matchMedia('(max-width: 1023px)').matches);
//TODO: Ask Gary about the behavior where 426 includes the navicon but 425px does not?
    useEffect(() => {
        const handleResize = () => {
            setIsDisplayVertical(window.matchMedia('(max-width: 1023px)').matches);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures the effect runs only once during mount
    return (
        <div className="bg-dark destination scrolling">
            <>
                {isDisplayVertical ? (
                    <>
                        <Header></Header>
                        <Subtitle pageNumber={'02'} subtitleText={'Meet your crew'}></Subtitle>                        
                    </>
                ) : (
                    <>
                    </>
                )}
            </>
        </div>
    )
}

export default Destination;