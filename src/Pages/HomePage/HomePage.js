import React from 'react'


import {SiGmail} from 'react-icons/si'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'

export default function HomePage(props) {
    const {goToLocation, aboutMeRef} = props.package
    return (
        <div className="page-container">
            <h1>Home Page</h1>
        <img className="middle-content" src="forest.jpg" />
            <button className="next-page-btn page-btn" onClick={() => goToLocation(aboutMeRef)}>
                <p>About Me Page</p>
                <i className="arrow right"></i>
            </button>
        <div className="home-page-icons">
            <button className="github-btn" onClick={() => console.log('hi')} >
                <FaGithub />
            </button>
            <button className="linkedin-btn">
                <FaLinkedin />
            </button>
            <button className="mail-btn">
                <SiGmail />
            </button>
        </div>
        </div>
    )
}
