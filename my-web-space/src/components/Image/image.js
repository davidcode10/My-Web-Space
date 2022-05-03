import React from 'react'
import './image.css'
import photo1 from './image/photo1.jpeg'
import photo2 from './image/photo2.jpeg'
import photo3 from './image/photo3.jpeg'

function image() {
    return (
        <div className='image'>
            <img src={photo1} alt='photo'></img>
        </div>
    )
}

export default image
