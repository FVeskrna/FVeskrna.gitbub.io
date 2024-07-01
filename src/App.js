import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle'
import Header from './Components/Header';
import Hero from './Components/Hero';
import HighlightedProjects from './Components/HighlightedProjects';
import NoteworthyProjects from './Components/NoteworthyProjects';
import ContactForm from './Components/ContactForm';
import ExperienceSection from './Components/ExperienceSection';
import ProjectDetail from './Components/ProjectDetail';


const App = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const headerHeight = 40; // Adjust according to your header height
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
      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    };

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
    </>
  );
};

const MainPage = () => {
  return (
    <>
      <Hero />
      <HighlightedProjects />
      <NoteworthyProjects />
      <ExperienceSection />
      <ContactForm />
    </>
  );
};

const ProjectDetailPage = () => {
  return (
    <>
      <ProjectDetail />
    </>
  );
};

export default App;
