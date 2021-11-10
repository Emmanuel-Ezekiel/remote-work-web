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

                        <table className="position-details">
                            <tbody>
                                <tr>
                                    <td className="list-desc">
                                       <label htmlFor="listing_title" className="addjob-title" >Job Title</label> 
                                       <input type="text"  style={{
                                           maxWidth: '890px',
                                           width: '350px',
                                           fontSize: '1em',
                                       }} />
                                       <span className="input-text">
                                           Example: "Senior Designer". &nbsp; Title must describe one position.
                                       </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <ul className="checkout">
                                            <li>
                                                <label className="category">
                                                Category
                                            </label>                     
                                            </li>
                                            <li>
                                               <label htmlFor="listing_job_listing_type" ClassName="job-type">
                                               Job Type
                                               </label>
                                            </li>
                                        </ul>
                                        <ul className="sub-catergory selectable-container">
                                        <li  style={{paddingRight: '10px', marginTop: '20px'}}>
                                        <select className="listing-category">
                                        <option selected value="1">Design</option>
                                        </select>
                                        </li>
                                        <li></li>
                                        <li></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </form>
            </div>
        </div>
    )
}

export default AddJobs;
