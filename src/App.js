import './App.css';
import React, {useRef} from "react"
import {HomePage, AboutMe, Skills, ContactMe, AnimationHome} from './Pages'

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
