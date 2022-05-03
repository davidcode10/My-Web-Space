import React from 'react'
import './icons.css'
import { FaGithub, FaInstagram, FaRegEnvelope, FaLinkedinIn } from 'react-icons/fa';


function icons() {
    return (
        <div>
            <ol>
                <li>
                    <a href='https://github.com/davidcode10' target='_blank'>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/davidek_official/?hl=en' target='_blank'>
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href='' target='_blank'>
                        <FaRegEnvelope />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/david-edson/' target='_blank'>
                        <FaLinkedinIn />
                    </a>
                </li>
            </ol>
        </div>
    )
}

export default icons
