import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProjectDetail = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sectionsRef = useRef({});

  const scrollToSection = (section) => {
    sectionsRef.current[section]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(section);
  };


  return (
    <>
      <Navigation>
        <Chapter onClick={() => scrollToSection('Introduction')}><b>01</b> Introduction</Chapter>
        <Chapter onClick={() => scrollToSection('ProjectBackground')}><b>02</b> Project Background</Chapter>
        <Chapter onClick={() => scrollToSection('Implementation')}><b>03</b> Implementation</Chapter>
        <Chapter onClick={() => scrollToSection('Testing')}><b>04</b> Testing</Chapter>
      </Navigation>
      <DetailContainer>
        <Section ref={(el) => sectionsRef.current['Introduction'] = el}>
          <h2>Chapter 1: Introduction</h2>
          <p>
          </p>
        </Section>
        <Section ref={(el) => sectionsRef.current['ProjectBackground'] = el}>
          <h2>Chapter 2: Project Background</h2>
          <p>This chapter details the development process, including the tools and technologies used.</p>
        </Section>
        <Section ref={(el) => sectionsRef.current['Implementation'] = el}>
          <h2>Chapter 3: Implementation</h2>
          <p>This chapter presents the results of the project, including any data and analysis.</p>
        </Section>
        <Section ref={(el) => sectionsRef.current['Testing'] = el}>
          <h2>Chapter 4: Testing</h2>
          <p>This chapter summarizes the findings and provides recommendations for future work.</p>
        </Section>
      </DetailContainer>
    </>
  );
};


const Navigation = styled.div`
  position: fixed;
  width: 40%;
  height: 3rem;
  top: 2rem;
  left:50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0; /* Background color */
  border-radius: 15px; /* Rounded edges */
  padding: 20px; /* Padding inside the div */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  z-index: 1000; /* Ensure it's on top */
  display: flex; /* Use Flexbox */
  justify-content: space-around; /* Equally space out the buttons */
  align-items: center; /* Center items vertically */
`;

const Chapter = styled.button`
  border: none;
  color: #000;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  background: none;
  white-space: nowrap; /* Ensure text stays on one line */

  &:hover {
    background-color: #ddd;
  }
`;

const DetailContainer = styled.div`
  padding: 6rem 2rem 2rem 2rem;
  text-align: left;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

export default ProjectDetail;
