import React, { useState } from 'react';
import Work from './undraw_laravel_and_vue_59tp.svg'
import Data from './Data'

const Hero = () => {
  const [ work, SetWork ] = useState(Data);

  return (
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
    </section>
  );
};

export default Hero;