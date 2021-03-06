import React from 'react'

export default function Skills(props) {
    const {aboutMeRef, contactMeRef, goToLocation} = props.package
    return (
        <div className="page-container">
            <h1>Skills</h1>
            <button className="prev-page-btn page-btn" onClick={() => goToLocation(aboutMeRef)}>
            <i className="arrow left"></i>
            </button>
            <button className="next-page-btn page-btn" onClick={() => goToLocation(contactMeRef)}>
            <i className="arrow right"></i>
            </button>

        </div>
    )
}
