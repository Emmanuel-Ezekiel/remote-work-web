import React from 'react'
import { Link } from 'react-router-dom';
// import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
function AddJobs() {
    return (
        <div className="home-back">
            <div className="home-return">
             <Link to='/' className="link-back">
         {/* <span className="arrow"><BsFillArrowLeftSquareFill/></span><span className="back-btn"> Back Home</span> */}
       </Link>
            </div>
            <h2 className="addjob-header">
                Reach the largest remote community on the web
            </h2>

            <div className="create-jobs">
                <form action="" className="form-addjobs">
                        <h2 className="create-container">First,tell us about the position <span className="required-field" >Required fields
                        </span></h2>

                        
                </form>
            </div>
        </div>
    )
}

export default AddJobs;
