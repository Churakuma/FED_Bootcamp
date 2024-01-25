import React, { useState, useEffect } from 'react';
import myData from '../data.json'
import Header from '../Header/Header';
import Subtitle from '../Subtitle/Subtitle';
import './TechnologyLayout.scss'
import TechnologyImage from '../Technology/TechnologyImg/TechnologyImg';
import SpaceLaunchImgLand from '../assets/technology/image-launch-vehicle-landscape.jpg'
import SpaceLaunchImgPort from '../assets/technology/image-launch-vehicle-portrait.jpg'
import SpacePortImgLand from '../assets/technology/image-spaceport-landscape.jpg'
import SpacePortImgPort from '../assets/technology/image-spaceport-portrait.jpg'
import SpaceCapImgLand from '../assets/technology/image-space-capsule-landscape.jpg'
import SpaceCapImgPort from '../assets/technology/image-space-capsule-portrait.jpg'

const TechnologyLayout = () => {

    // State to determine if the display is vertical based on window width
    const [isDisplayVertical, setIsDisplayVertical] = useState(window.matchMedia('(max-width: 1023px)').matches);
    useEffect(() => {
        // Event listener to handle window resize
        const handleResize = () => {
            setIsDisplayVertical(window.matchMedia('(max-width: 1023px)').matches);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        
    }, []); // Empty dependency array ensures the effect runs only once during mount

    // State to manage the selected crew member
    const [technology, setTechnology] = useState(0);

    // State variables to store crew details
    const [technologyName, setName] = useState('');
    let technologyImage = useState('');
    const [technologyDesc, setDesc] = useState('');

    // Functions to set crew details based on the selected crew member
    const setTechnologyName = () => {
        setName(myData.technology[technology].name)
    }

    const setTechnologyDesc = () => {
        setDesc(myData.technology[technology].description)
    }

    // useEffect to update crew details when crewMember changes
    useEffect(() => {
        setTechnologyName();
        setTechnologyDesc();
    }, [technology]);

    // Figure out a way to detect port and landscape requirement and switch between
    switch (technology) {
        case 0:
            technologyImage = SpaceLaunchImgLand;
            break;
        case 1:
            technologyImage = SpacePortImgLand;
            break;
        case 2:
            technologyImage = SpaceCapImgLand;
            break;
        default:
            technologyImage = null;
    }

    return (
        <div className="bg-dark technology scrolling">
            <>
                {isDisplayVertical ? (  // Display content conditionally based on screen width
                    <>
                        <Header></Header>
                        <Subtitle pageNumber={'03'} subtitleText={'Space Launch 101'}></Subtitle>
                        <TechnologyImage technologyImageAlt={'Image of Space Technology'} TechnologyImageSrc={technologyImage}></TechnologyImage>

                    </>
                ) : (
                    <> {/* Render nothing when not in vertical display */}
                    </>
                )}
            </>
        </div>
    )
}

export default TechnologyLayout;