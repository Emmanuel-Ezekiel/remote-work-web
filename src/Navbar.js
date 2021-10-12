import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
    return (
        <>
          <header className='nav'>
              <div className="nav-center">
                  <div className="nav-header">
                      <a className="nav-logo logo" href="https://we-work-remotely.netlify.app">Work Remotely</a>
                      <button className="btn toggle-btn"  onClick={toggleLinks}> <FaBars/></button>
                  </div>
                <div className="links-container" ref={linksContainerRef}>
                    <ul className="nav-links" ref={linksRef}>
                      <li className="link-btn">
                          <a href="/categories">Categories</a>
                      </li>
                      <li className="link-btn">
                          <a href="/community">Community</a>
                      </li>
                      <li className="link-btn">
                          <a href="/job seekers">Job Seekers</a>
                      </li>
                      <li className="link-btn">
                          <a href="/employers">Employers</a>
                      </li>  
                    <li className="link-btn search-btn" > <FaSearch/></li>
                    <li className="link-btn">
                        <button className=" btn post-btn" >Post a job</button>
                    </li>
                  </ul>
                </div>  
              </div>
            </header>  
        </>
    )
}

export default Navbar;
