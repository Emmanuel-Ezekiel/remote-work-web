import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
function AddJobs() {
    return (
        <div>
        <Link to='/' className="link-to-btn">
         <span className="arrow"><BsFillArrowLeftSquareFill/></span><span className="back-btn"> Back Home</span>
       </Link>
        </div>
    )
}

export default AddJobs;
