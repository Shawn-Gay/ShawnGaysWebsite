import React from 'react'

export default function ContactMe(props) {
    const {skillsRef, goToLocation} = props.package
    return (
        <div className="page-container">
            <h1>Contact Me</h1>
            <button className="prev-page-btn page-btn" onClick={() => goToLocation(skillsRef)}>
            <i className="arrow left"></i>
            </button>
        </div>
    )
}
