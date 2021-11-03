import React from 'react'
import { Link } from 'react-router-dom';


 const footer = () => {
    return (
        <div>
            <footer className="footer-container">
                <div className="footer-top">
                    <div className="footer-desc">
                        <h2 className="footer-head">
                        WorkRemotely
                        </h2>
                    <p className="footer-text">
                        We strongly encourage employers to embrace diversity, equity, and <br/> inclusion as fundamental values when hiring through We Work <br /> Remotely.
                    </p>
                    </div>

                    <div className="footer-post">
                        <h2 className="num-post">
                            22,439
                        </h2>
                        <p className="text-post">
                            Remote Jobs Posted
                        </p>
                        <Link to="/Add-jobs" >
                    <button className="footer-post-btn">Post a Job</button>
                      </Link>
                    </div>  
                </div>
                    
            </footer>
            
        </div>
    )
}

export default footer;