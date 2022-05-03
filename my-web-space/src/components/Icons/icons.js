import React from 'react'
import './icons.css'
import { FaGithub, FaInstagram, FaRegEnvelope, FaLinkedin } from 'react-icons/fa';


function icons() {
    return (
        <div>
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
                    <a href='mailto:davidedson2030@outlook.com' className='email-icon' target='_blank'>
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
