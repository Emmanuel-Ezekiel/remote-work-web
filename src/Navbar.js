import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'

function Navbar() {
    return (
        <>
          <header className='nav'>
              <div className="nav-center">
                  <div className="nav-header">
                      <a className="nav-logo logo" href="https://we-work-remotely.netlify.app">WorkRemotely</a>
                      <button className="btn toggle-btn"> <FaBars/></button>
                  </div>

                  <nav className="nav-bar">
                    <ul className="nav-links">
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
                </nav>
              </div>
            </header>  
        </>
    )
}

export default Navbar;
