import './Header.css'
import React from 'react'

export default function Header() {
    return (
        <div className='profile'>
            <div className='profile1'>
                Hello, I'm
            </div>
            <div className='name'>
                David
            </div>
            <div className='profile2'>
                And I'm
                <span className='position'>
                    Developer
                </span>
            </div>
        </div>
    )
}
