import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Data from './Data'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const JobDescription = () => {
     const [description, setDescription] = useState('job description')
     const [title, setTitle] = useState()
     const [location, setLocation] = useState()
     const [image, setImage] = useState()
    const { id } = useParams();

    useEffect(() => {
        const newDescription = Data.find((job) => job.id === parseInt(id));
        setTitle(newDescription.jobTitle);
        setDescription(newDescription.companyName);
        setLocation(newDescription.Location);

    }, [])
    return (
        <div>
            
      <Link to='/' className="link-btn">
         <span> <BsFillArrowLeftSquareFill/></span><span className='description-btn'> Back Home</span>
       </Link>

       <h2>{description}</h2>
       <h2>{title}</h2>
       <h2>{location}</h2>
        </div>
    )
}

export default JobDescription;
