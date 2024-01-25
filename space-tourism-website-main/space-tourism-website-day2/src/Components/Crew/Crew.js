import React, { useState, useEffect } from 'react';
import CrewTitle from './CrewTitle/CrewTitle';
import './Crew.scss'
import CrewText from './CrewText/CrewText';

const Crew = ({
    name,
    role,
    bio
}) => {
    
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
            <>
                {isDisplayVertical ? (
                    <>
                        <CrewTitle crewRole={role} crewName={name}></CrewTitle>
                        <CrewText text={bio}></CrewText>
                    </>
                ) : (
                    <>
                    </>
                )}
            </>
    )
}

export default Crew;