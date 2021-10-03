import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'

function Navbar() {
    return (
        <>
          <header className='nav'>
              <div className="nav-center">
                  <div className="nav-header">
                      <img alt="we work remotely" className="nav-logo" src="https://weworkremotely.com/assets/IsotypeV2-1ebe3dd57673f3e8d02b7490bc0faaef55d6a95d3a4aaf17298bd3ed503ae7fe.svg"></img>
                      <button className="btn toggle-btn"> <FaBars/></button>
                  </div>

                  <nav className="nav-bar">
                    <ul className="nav-links">
                      <li className="link-btn">
                          <a href="#">Categories</a>
                      </li>
                      <li className="link-btn">
                          <a href="#">Community</a>
                      </li>
                      <li className="link-btn">
                          <a href="#">Job Seekers</a>
                      </li>
                      <li className="link-btn">
                          <a href="#">Employers</a>
                      </li>  
                    <li className="link-btn search-btn" > <FaSearch/></li>
                    <li className="link-btn">
                        <a id="post-btn" href="#" >post a job</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>  
        </>
    )
}

export default Navbar;
