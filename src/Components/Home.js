import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />
      <Section id="about">
        <h1>About</h1>
        <p>This is the about section.</p>
      </Section>
      <Section id="projects">
        <h1>Projects</h1>
        <p>This is the projects section.</p>
      </Section>
      <Section id="contact">
        <h1>Contact</h1>
        <p>This is the contact section.</p>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: #1a1a2e;
  color: #fff;
  &:nth-child(even) {
    background: #16213e;
  }
`;

export default Home;
