import './App.css';
import React, {useRef} from "react"
import {HomePage, AboutMe, Skills, ContactMe, AnimationHome} from './Pages'

import {SiGmail} from 'react-icons/si'
import {FaGithub, FaLinkedin } from 'react-icons/fa'

function App() {

  const posRef = useRef(null)

  const aboutMeRef = useRef(null)
  const homePageRef = useRef(null)
  const skillsRef = useRef(null)
  const contactMeRef = useRef(null)

  const goToLocation = (toRef) => {
    posRef.current.scrollTo({
      left: toRef.current.offsetLeft,
      behavior: "smooth"
    })
  }




  return (
    <div className="App">
      <div ref={posRef} className="container">
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
        <section ref={homePageRef} >
          <AnimationHome />
          <HomePage package={{aboutMeRef, goToLocation}} />

        </section>

        <section ref={aboutMeRef}>
          <AboutMe package={{homePageRef, skillsRef, goToLocation}} />
        </section>

        <section ref={skillsRef}>
          <Skills package={{aboutMeRef, contactMeRef, goToLocation}} />
        </section>

        <section ref={contactMeRef}>
          <ContactMe package={{skillsRef, goToLocation}} />
        </section>
      </div>
    </div>
  );
}

export default App;
