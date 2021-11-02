import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
function AddJobs() {
    return (
        <div className="home-back">
        <Link to='/' className="link-back">
         <span className="arrow"><BsFillArrowLeftSquareFill/></span><span className="back-btn"> Back Home</span>
       </Link>
        </div>
    )
}

export default AddJobs;
