import React from 'react'
import { Link, useParams } from 'react-router-dom';


 const footer = () => {
    return (
        <div>
            <footer className="footer-container">
                    <div className="footer-desc">
                        <h2 className="footer-head">
                        WorkRemotely
                        </h2>
                    <p className="footer-text">
                        We strongly encourage employers to embrace diversity, equity, and inclusion as fundamental values when hiring through We Work Remotely.
                    </p>
                    </div>

                    <div>
                        <h2 className="num-post">
                            22,439
                        </h2>
                        <p className="text-post">
                            Remote Jobs Posted
                        </p>
                        <Link to="/Add-jobs" >
                    <button className="post-btn">Add Jobs</button>
                      </Link>
                    </div>
                    
                
                    
            </footer>
            
        </div>
    )
}

export default footer;