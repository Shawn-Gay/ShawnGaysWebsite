import React from 'react'

export default function HomePage(props) {
    const {goToLocation, aboutMeRef} = props.package
    return (
        <div className="page-container">
            <h1>Home Page</h1>
            <button className="next-page-btn page-btn" onClick={() => goToLocation(aboutMeRef)}>
                <i class="arrow right"></i>
            </button>
        </div>
    )
}
