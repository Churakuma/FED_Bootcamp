import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Subtitle from '../Subtitle/Subtitle';
import moonImage from '../assets/destination/image-moon.png'
import './Destination.scss'
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
                        <DestinationImage destinationImageAltText={"The Moon"} destinationImageSrc={moonImage}></DestinationImage>
                        <DestinationNavList></DestinationNavList>
                        <DestinationTitle destinationName={"Moon"}></DestinationTitle>
                        <DestinationText text={"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."}></DestinationText>
                        <div className='destination-divider'></div>
                        <div className='flex data-container'>
                            <DestinationData subheadingOne={"Avg. Distance"} subheadingTwo={"384,000 km"}></DestinationData>
                            <DestinationData subheadingOne={"Est. Travel Time"} subheadingTwo={"3 days"}></DestinationData>
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