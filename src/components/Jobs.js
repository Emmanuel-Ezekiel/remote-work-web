import React, { useState } from 'react'
import Data from './Data'

function Jobs () {
    const [remote, setRemote] = useState(Data)
    return (
        <section className='Jobs'>
            <article>
                <h2>
                    <a href="">Sales and Marketing jobs</a>
                    <span className='lastest_post'>Lastest posted 30 minutes ago </span>
                    <a href="">
                        <img src="https://weworkremotely.com/assets/rss-feed-bac611a39b717b45766a28c96e549e1879df2786844a54f9c888ed89d64891a7.svg" alt="lastest post" />
                    </a>
                </h2>
            </article>
        </section>
    )
}

export default Jobs
