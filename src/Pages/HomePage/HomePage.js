import React from 'react'



export default function HomePage(props) {
    const {goToLocation, aboutMeRef} = props.package
    return (
        <div className="page-container">
            <h1>Shawn Gay</h1>
        <div className="middle-container" >
            <p>“I have not failed, but found 1000 ways to not make a light bulb.”
                - Thomas Edison
            </p>
        </div>
            <button className="next-page-btn page-btn" onClick={() => goToLocation(aboutMeRef)}>
                <p>About Me Page</p>
                <i className="arrow right"></i>
            </button>
        </div>
    )
}
