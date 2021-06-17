import React from 'react'

import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'


export default function HomePage(props) {
    const {goToLocation, aboutMeRef} = props.package
    return (
        <div className="page-container">
            <h1>Home Page</h1>
        <img className="middle-content" src="forest.jpg" />
            <button className="next-page-btn page-btn" onClick={() => goToLocation(aboutMeRef)}>
                <i class="arrow right"></i>
            </button>
        <div className="home-page-icons">
            <FaGithub />
            <FaLinkedin />
            <FaEnvelope />
        </div>
        </div>
    )
}
