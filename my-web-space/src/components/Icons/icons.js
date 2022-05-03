import React from 'react'
import './icons.css'
import { FaGithub, FaInstagram, FaRegEnvelope, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';


function icons() {
    return (
        <div className='icons'>
            <ol>
                <li>
                    <a href='https://github.com/davidcode10' className='github-icon' target='_blank'>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/davidek_official/?hl=en' className='instagram-icon' target='_blank'>
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href='' className='email-icon' target='_blank'>
                        <FaRegEnvelope />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/david-edson/' className='linkedin-icon' target='_blank'>
                        <FaLinkedin />
                    </a>
                </li>
            </ol>
        </div>
    )
}

export default icons
