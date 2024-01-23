import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Subtitle from '../Subtitle/Subtitle';
import europaImage from '../assets/destination/image-europa.png'
import './DestinationEuropa.scss'
import DestinationImage from './DestinationImage/DestinationImage';
import DestinationNavList from './DestinationNavList/DestinationNavList';
import DestinationTitle from './DestinationTitle/DestinationTitle';
import DestinationText from './DestinationText/DestinationText';
import DestinationData from './DestinationData/DestinationData';

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
                        <Subtitle pageNumber={'01'} subtitleText={'Pick your destination'}></Subtitle>
                        <DestinationImage destinationImageAltText={"The Moon"} destinationImageSrc={europaImage}></DestinationImage>
                        <DestinationNavList></DestinationNavList>
                        <DestinationTitle destinationName={"Europa"}></DestinationTitle>
                        <DestinationText text={"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."}></DestinationText>
                        <div className='destination-divider'></div>
                        <div className='flex data-container'>
                            <DestinationData subheadingOne={"Avg. Distance"} subheadingTwo={"628 Mil. km"}></DestinationData>
                            <DestinationData subheadingOne={"Est. Travel Time"} subheadingTwo={"3 years"}></DestinationData>
                        </div>
                        
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