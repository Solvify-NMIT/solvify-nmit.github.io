import './App.css'
import About from './components/About'
import Events from './components/Events'
import GroupPhoto from './components/GroupPhoto'
import Insta from './components/Insta'
import Home from './components/Home'
import MeetOurTeam from './components/Team'
import Founder from './components/Founder';

import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { useRef } from 'react'

function App() {

  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const eventsRef = useRef(null);
  const projectRef = useRef(null);
  const meetOurTeamRef = useRef(null);
  const founderRef = useRef(null);
  const groupPhotoRef = useRef(null);
  const instaRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100, // adjust offset for navbar height
      behavior: "smooth",
    });
  };
  

  return (
    <div className='bg-black text-white'>
      <Navbar
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToEvent={() => scrollToSection(eventsRef)}
        scrollToProject={() => scrollToSection(projectRef)}
        scrollToTeam={() => scrollToSection(meetOurTeamRef)}
        scrollToFounder={() => scrollToSection(Founder)}
        scrollToPhoto={() => scrollToSection(groupPhotoRef)}
        scrollToInsta ={()=>scrollToSection(instaRef)}
      />
      <div ref={homeRef}><Home scrollToProject={() => scrollToSection(projectRef)} /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={eventsRef}><Events /></div>
      <div ref={projectRef}><Projects /></div>
      <div ref={meetOurTeamRef}><MeetOurTeam /></div>
      <div ref={founderRef}><Founder /></div>
      {/* <div ref={groupPhotoRef}><GroupPhoto /></div> */}
      {/* <div ref={instaRef}><Insta /></div> */}

    </div>
  )
}

export default App