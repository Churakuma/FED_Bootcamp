import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Subtitle from '../Subtitle/Subtitle';
import marsImage from '../assets/destination/image-mars.png'
import './DestinationMars.scss'
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
                        <DestinationImage destinationImageAltText={"The planet Mars"} destinationImageSrc={marsImage}></DestinationImage>
                        <DestinationNavList></DestinationNavList>
                        <DestinationTitle destinationName={"Mars"}></DestinationTitle>
                        <DestinationText text={"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest plaetary mountain in our solar system. It’s two and a half times the size of Everest!"}></DestinationText>
                        <div className='destination-divider'></div>
                        <div className='flex data-container'>
                            <DestinationData subheadingOne={"Avg. Distance"} subheadingTwo={"225 MIL. KM"}></DestinationData>
                            <DestinationData subheadingOne={"Est. Travel Time"} subheadingTwo={"9 Months"}></DestinationData>
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