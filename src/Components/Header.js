import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isProjectDetailPage = location.pathname.startsWith('/project/');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const headerHeight = 40; // Adjust this height according to your header height
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Nav>
      <LogoContainer>
        <Link to="/" onClick={() => scrollToSection('hero')}>
          Filip Veskrna
        </Link>
      </LogoContainer>
      {!isProjectDetailPage && (
        <NavMenu>
          <NavItem>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </NavItem>
          <NavItem>
            <button onClick={() => scrollToSection('experience')}>Experience</button>
          </NavItem>
          <NavItem>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </NavItem>
          <DownloadButton href="/path-to-resume.pdf" download>
            Download Resume
          </DownloadButton>
        </NavMenu>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: #8d99ae;
  position: sticky;
  top: 1rem;
  z-index: 10000;
  height: 40px; /* Ensure this matches the height in App.js */
`;

const LogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
`;

const NavItem = styled.div`
  margin-left: 2rem; /* Adjust spacing between menu items */
  cursor: pointer;
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;

  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    font-size: 20px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const DownloadButton = styled.a`
  background-color: #e94560; /* Button background color */
  color: #fff; /* Button text color */
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 2rem;

  &:hover {
    background-color: #c92a44; /* Darker shade of the button color on hover */
  }
`;

export default Header;
