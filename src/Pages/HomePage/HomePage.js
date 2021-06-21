import React from 'react'



export default function HomePage(props) {
    const {goToLocation, aboutMeRef} = props.package
    return (
        <div className="page-container">
        <div class="custom-shape-divider-top-1624229019">
        <svg viewBox="241.816 -789.542 112.645 1291.189" width="112.645" height="1291.189">
            <path d="M 354.461 501.647 L 258.904 500.701 C 229.863 440.585 242.491 354.993 262.411 269.739 C 287.68 161.595 335.435 51.27 341.217 7.875 C 354.776 -93.884 353.092 -190.116 334.596 -270.229 C 320.686 -330.477 305.539 -388.895 296.759 -437.658 C 276.211 -551.779 286.543 -686.058 328.92 -788.596 L 351.622 -789.542 L 354.461 501.647 Z"></path>
        </svg>
        </div>    
            <h1>Shawn Gay</h1>
        <div className="middle-container" >
        </div>
            <button className="next-page-btn page-btn" onClick={() => goToLocation(aboutMeRef)}>
                <p>About Me Page</p>
                <i className="arrow right"></i>
            </button>
        </div>
    )
}
