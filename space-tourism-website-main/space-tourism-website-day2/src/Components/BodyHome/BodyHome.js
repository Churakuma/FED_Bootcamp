import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import "./BodyHome.scss"
import LargeButton from "../LargeButton/LargeButton";
import TextHome from "../TextHome/TextHome";

const BodyHome = () => {
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
        <div className="bg-dark home">
            <>
                {isDisplayVertical ? (
                    <>
                        <Header></Header>
                        <TextHome></TextHome>
                        <LargeButton></LargeButton>
                    </>
                ): (
                    <>
                        <Header></Header>
                        <div className='horizontal-display'>
                            <TextHome></TextHome>
                            <LargeButton></LargeButton>
                        </div>
                        
                    </>
                )}
                
            </>
        </div>
    )
}

export default BodyHome;