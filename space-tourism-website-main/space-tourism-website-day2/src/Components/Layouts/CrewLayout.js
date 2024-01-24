import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Subtitle from '../Subtitle/Subtitle';
import Crew from '../Crew/Crew';
import './CrewLayout.scss';
import myData from '../../data.json';
import CrewImage from '../Crew/CrewImage/CrewImage';
import CrewNavButton from '../Crew/CrewNavButtons/CrewNavButtons';

const CrewLayout = () => {

    const [crewMember, setCrewMember] = useState(0);

    const [crewName, setName] = useState('');
    const [crewImage, setImage] = useState('');
    const [crewRole, setRole] = useState('');
    const [crewBio, setBio] = useState('');

    // Need to call these functions somewhere???
    const setCrewName = () => {
        setName(myData.crew[crewMember].name)
    }
    const setCrewImage = () => {
        setImage(myData.crew[crewMember].images.png)
    }

    const setCrewRole = () => {
        setRole(myData.crew[crewMember].role)
    }

    const setCrewBio = () => {
        setBio(myData.crew[crewMember].bio)
    }

    console.log(crewMember);
    
    const [isDisplayVertical, setIsDisplayVertical] = useState(window.matchMedia('(max-width: 1023px)').matches);
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
        <div className="bg-dark crew scrolling">
            <>
                {isDisplayVertical ? (
                    <>
                        <Header></Header>
                        <Subtitle pageNumber={'02'} subtitleText={'Meet your crew'}></Subtitle>
                        <CrewImage crewImageAltText={'Image of Crew Member'} crewImageSrc={crewImage}></CrewImage>
                        <div className='crew-divider'></div>
                        <CrewNavButton 
                            crewMember={crewMember} 
                            setCrewMember={setCrewMember}
                        ></CrewNavButton>
                        <Crew name={crewName} role={crewRole} bio={crewBio}></Crew>
                    </>
                ) : (
                    <>
                    </>
                )}
            </>
        </div>
    )
}

export default CrewLayout;