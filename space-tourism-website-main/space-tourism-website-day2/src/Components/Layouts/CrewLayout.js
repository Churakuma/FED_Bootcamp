import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Subtitle from '../Subtitle/Subtitle';
import Crew from '../Crew/Crew';
import './CrewLayout.scss';
import myData from '../data.json';  // Importing data from a JSON file
import CrewImage from '../Crew/CrewImage/CrewImage';
import CrewNavButton from '../Crew/CrewNavButtons/CrewNavButtons';
import DougHurleyImg from '../assets/crew/image-douglas-hurley.png'
import MarkShuttleImg from '../assets/crew/image-mark-shuttleworth.png'
import VictorImg from '../assets/crew/image-victor-glover.png'
import AnoushehImg from '../assets/crew/image-anousheh-ansari.png'

const CrewLayout = () => {

    // State to manage the selected crew member
    const [crewMember, setCrewMember] = useState(0);

    // State variables to store crew details
    const [crewName, setName] = useState('');
    let crewImage = useState('');
    const [crewRole, setRole] = useState('');
    const [crewBio, setBio] = useState('');

    // Functions to set crew details based on the selected crew member
    const setCrewName = () => {
        setName(myData.crew[crewMember].name)
    }
    // const setCrewImage = () => {
    //     setImage(myData.crew[crewMember].images.png)
    // }

    const setCrewRole = () => {
        setRole(myData.crew[crewMember].role)
    }

    const setCrewBio = () => {
        setBio(myData.crew[crewMember].bio)
    }

    // useEffect to update crew details when crewMember changes
    useEffect(() => {
        setCrewName();
        // setCrewImage();
        setCrewRole();
        setCrewBio();
    }, [crewMember]);

    switch (crewMember) {
        case 0:
            crewImage = DougHurleyImg;
            break;
        case 1:
            crewImage = MarkShuttleImg;
            break;
        case 2:
            crewImage = VictorImg;
            break;
        case 3:
            crewImage = AnoushehImg;
            break;
        default:
            crewImage = null;
    }

    
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

    return (
        <div className="bg-dark crew scrolling">
            <>
                {isDisplayVertical ? (  // Display content conditionally based on screen width
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
                    <> {/* Render nothing when not in vertical display */}
                    </>
                )}
            </>
        </div>
    )
}

export default CrewLayout;
