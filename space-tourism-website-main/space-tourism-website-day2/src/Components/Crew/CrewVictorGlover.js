import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Subtitle from '../Subtitle/Subtitle';
import VictorGloverImg from '../assets/crew/image-victor-glover.webp'
import CrewTitle from './CrewTitle/CrewTitle';
import './Crew.scss'
import CrewImage from './CrewImage/CrewImage';
import CrewNavButtons from './CrewNavButtons/CrewNavButtons'
import CrewText from './CrewText/CrewText'

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
                        <CrewImage crewImageAltText={'Pilot Victor Glover'} crewImageSrc={VictorGloverImg}></CrewImage>
                        <div className='crew-divider'></div>
                        <CrewNavButtons setInitialActive={3}></CrewNavButtons>
                        <CrewTitle crewRole={'Pilot'} crewName={'Victor Glover'}></CrewTitle>
                        <CrewText text={'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.'}></CrewText>
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