import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Subtitle from '../Subtitle/Subtitle';
import AnoushehAnsariImg from '../assets/crew/image-anousheh-ansari.png'
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
                        <CrewImage crewImageAltText={'Flight Engineer Anousheh Ansari'} crewImageSrc={AnoushehAnsariImg}></CrewImage>
                        <div className='crew-divider'></div>
                        <CrewNavButtons></CrewNavButtons>
                        <CrewTitle crewRole={'Flight Engineer'} crewName={'Anousheh Ansari'}></CrewTitle>
                        <CrewText text={'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'}></CrewText>
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