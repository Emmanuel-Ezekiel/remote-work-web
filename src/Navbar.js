import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'

function Navbar() {
    return (
        <>
          <nav className='nav'>
              <div className="nav-center">
                  <div className="nav-header">
                      <img alt="we work remotely" className="nav-logo" src="https://weworkremotely.com/assets/IsotypeV2-1ebe3dd57673f3e8d02b7490bc0faaef55d6a95d3a4aaf17298bd3ed503ae7fe.svg"></img>
                      <button className="btn toggle-btn"> <FaBars/></button>
                  </div>
                  <ul className="nav-links">
                      <li>
                          <button className="link-btn">categories</button>
                      </li>
                      <li>
                          <button className="link-btn">communities</button>
                      </li>
                      <li>
                          <button className="link-btn">job seekers</button>
                      </li>
                      <li>
                          <button className="link-btn">employers</button>
                      </li>
                    <button className="btn search-btn"> <FaSearch/></button>
                  </ul>
                  
              </div>
            </nav>  
        </>
    )
}

export default Navbar;
