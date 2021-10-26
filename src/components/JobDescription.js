import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Data from './Data'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const JobDescription = () => {
     const [description, setDescription] = useState("")
     const [title, setTitle] = useState("")
     const [location, setLocation] = useState("")
     const [image, setImage] = useState("")
     const { id } = useParams();

    useEffect(() => {
        const newDescription = Data.find((job) => job.id === parseInt(id));
        setTitle(newDescription.jobTitle);
        setDescription(newDescription.companyName);
        setLocation(newDescription.Location);
        setImage(newDescription.image)
    }, [id])
    return (
    <section>
     <div className="description-btn">
        <Link to='/' className="link-to-btn">
         <span className="arrow"><BsFillArrowLeftSquareFill/></span><span className="back-btn"> Back Home</span>
       </Link>
       <article className="description">
        <h2 ><img src={image} alt="" className="img-descripton"/>{description}</h2>
       <h2 className="title">{title}</h2>
       <span className="location-btn">{location}</span>
       </article>
     </div>
    </section>
    )
}

export default JobDescription;
