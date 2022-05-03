import React from 'react'
import './image.css'
import photo from './../Assets/image/photo.jpeg'

function image() {
    return (
        <div className='image'>
            <img src={photo} alt='photo'></img>
        </div>
    )
}

export default image
