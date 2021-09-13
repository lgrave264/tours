import React from 'react'
import logo from '../util/load.gif'

const Load = () => {
    return (
        <article className='fill'>
            <div><img src={logo} alt="Loading..."/></div>
        </article>
    )
}

export default Load
