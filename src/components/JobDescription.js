import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Data from './Data'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const JobDescription = () => {
     const [description, setDescription] = useState("")
     const [title, setTitle] = useState("")
     const [location, setLocation] = useState("")
     const { id } = useParams();

    useEffect(() => {
        const newDescription = Data.find((job) => job.id === parseInt(id));
        setTitle(newDescription.jobTitle);
        setDescription(newDescription.companyName);
        setLocation(newDescription.Location);
    }, [id])
    return (
    <section>
     <div className="description-btn">
        <Link to='/' className="link-btn">
         <span><BsFillArrowLeftSquareFill/></span><span className="home-btn"> Back Home</span>
       </Link>
       <article className="description">
        <h2>{description}</h2>
       <h2>{title}</h2>
       <button className="location-btn">{location}</button>
       </article>
       
     </div>
    </section>
    )
}

export default JobDescription;
