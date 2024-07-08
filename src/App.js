import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './Components/Header';
import Hero from './Components/Hero';
import HighlightedProjects from './Components/HighlightedProjects';
import NoteworthyProjects from './Components/NoteworthyProjects';
import ContactForm from './Components/ContactForm';
import ExperienceSection from './Components/ExperienceSection';
import VRMeetingRoom from './Components/VRMeetingRoom';
import VRWorkshop from './Components/VRWorkshop';

const basename = process.env.NODE_ENV === 'production' ? '/FVeskrnaPortfolio' : '/';

const App = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const headerHeight = 80;
      const direction = event.deltaY > 0 ? 'down' : 'up';
      const sections = document.querySelectorAll('section');
      const currentSectionIndex = Math.floor(window.scrollY / window.innerHeight);
      let targetSectionIndex = currentSectionIndex;

      if (direction === 'down') {
        targetSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
      } else if (direction === 'up') {
        targetSectionIndex = Math.max(currentSectionIndex - 1, 0);
      }

      const targetSection = sections[targetSectionIndex];

      if (targetSection) {
        if(targetSection === sections[0]){
          window.scrollTo({
            top: targetSection.offsetTop - headerHeight,
            behavior: 'smooth',
          });
        }
        else{
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
          });
        }
        
      } else {
        console.warn('Target section not found.');
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router basename={basename}>
      <Header/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/VRMeetingRoom" element={<VRMeetingRoom/>} />
          <Route path="/project/VRWorkshop" element={<VRWorkshop />} />
        </Routes>
      </Router>
    </>
  );
};

const MainPage = () => {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <HighlightedProjects />
      <NoteworthyProjects />
      <ContactForm />
    </>
  );
};

const ProjectDetailPage = () => {
  return (
    <>
      <VRMeetingRoom />
    </>
  );
};

export default App;
