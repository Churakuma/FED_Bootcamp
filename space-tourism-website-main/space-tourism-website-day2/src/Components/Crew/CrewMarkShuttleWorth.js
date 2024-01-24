import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Subtitle from '../Subtitle/Subtitle';
import MarkShuttleWorthImg from '../assets/crew/image-mark-shuttleworth.png'
import CrewTitle from './CrewTitle/CrewTitle';
import './Crew.scss'
import CrewImage from './CrewImage/CrewImage';
import CrewNavButtons from './CrewNavButtons/CrewNavButtons'
import CrewText from './CrewText/CrewText';

const Destination = () => {
    
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
                        <CrewImage crewImageAltText={'Mission Specialist Mark Shuttleworth'} crewImageSrc={MarkShuttleWorthImg}></CrewImage>
                        <div className='crew-divider'></div>
                        <CrewNavButtons></CrewNavButtons>
                        <CrewTitle crewRole={'Mission Specialist'} crewName={'Mark Shuttleworth'}></CrewTitle>
                        <CrewText text={'Mark Richard Shuttleworth is the founder and CEO of canonical, the company begind the linux-based Ubuntu operatin system. Shuttleworth became the first South African to travel to space as a space tourist.'}></CrewText>
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