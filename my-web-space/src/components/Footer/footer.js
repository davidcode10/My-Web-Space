import './footer.css'
import React from 'react'

function footer() {
    return (
        <div className='footer'>
            <p className='copyright'>
                {new Date().getFullYear()} ©
                <a className='footer-link' href='https://www.instagram.com/davidek_official/?hl=en'>
                    David
                </a>
            </p>
        </div>
    )
}

export default footer
