import React, { useState } from 'react';
import Work from './undraw_laravel_and_vue_59tp.svg'


const Hero = () => {

  return (
    <main>
       <section className='hero' >
      <div className='hero-center'>
        <article className='hero-info'>
          <h1 className="header"> 
            WORK REMOTELY
          </h1>
          <p className="Content">
            Work Remotely is the <strong>  largest remote work community in the world. </strong>
            With over 3M visitors, Work Remotely is the number one destination to find and list incredible remote jobs.
          </p>
          <button className='Post-job'>Post a job for $229</button>
        </article>
        <article className='hero-images'>
          <img src={Work} className='phone-img' alt='phone' />
        </article>
      </div>
      <div className="trusted-banner">
        <div className="trusted-text">
          Trusted by the World's leading companies
        </div>
      </div>   
    </section>
   {/* <div className='banner-header'>
        <div className="trusted-banner">
        <div className="trusted-text">
          Trusted by the World's leading companies
        </div>
      </div>
    </div> */}
   </main>
   
  );
};

export default Hero;