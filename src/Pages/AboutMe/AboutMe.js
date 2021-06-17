import React from 'react'

export default function AboutMe(props) {
    const {homePageRef, skillsRef, goToLocation} = props.package
    return (
        <div className="page-container">
            <h1>About Me</h1>
            <button className="prev-page-btn page-btn" onClick={() => goToLocation(homePageRef)}>
            <i class="arrow left"></i>
            </button>
            <button className="next-page-btn page-btn" onClick={() => goToLocation(skillsRef)}>
            <i class="arrow right"></i>
            </button>

        </div>
    )
}
