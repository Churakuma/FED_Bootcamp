import './SideMenu.scss'
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

export default function SideMenu() {
    // State to manage the visibility of the side menu
    const [isSideMenu, setSideMenu] = useState(false);
  
    // Function to toggle the side menu visibility
    const open = () => {
      setSideMenu(!isSideMenu);
    };
  
    // Ref to the DOM node of the side menu
    const domNode = useRef();
  
    // Function to close the side menu when a click occurs outside of it
    const updateState = (event) => {
      if (domNode.current.contains(event.target)) {
        return;
      }
      setSideMenu(false);
    };
  
    // Attach event listener when the component mounts
    useEffect(() => {
      document.addEventListener('mousedown', updateState);
  
      // Cleanup: remove event listener when the component unmounts
      return () => {
        document.removeEventListener('mousedown', updateState);
      };
    }, []);
  
  return (
    <>
        <span
        ref={domNode}
        className="navIcon text-accent"
        onClick={() => {
            open(isSideMenu)
        }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                {isSideMenu ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                ) : (
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                )}
            </svg>
        </span>

        <div className="sideMenu ff-sans-cond" style={{ right: isSideMenu ? '0px' : '-262px' }}>
            <ul className='tabs-list'>
                <li><Link className='text-white' to={'/FED_Bootcamp'}>00 Home</Link></li>
                <li><Link className='text-white' to={'/destination'}>01 Destination</Link></li>
                <li><Link className='text-white' to={'/crew'}>02 Crew</Link></li>
                <li><Link className='text-white' to={'/Technology'}>03 Technology</Link></li>
            </ul>
        </div>
    </>
  )
}