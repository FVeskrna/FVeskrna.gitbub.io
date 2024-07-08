import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isProjectDetailPage = location.pathname.startsWith('/project/');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const headerHeight = 0; // Adjust this height according to your header height
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <Nav>
        
        {!isProjectDetailPage && (
          <>
            <LogoContainer>
            <Link to="/" onClick={() => scrollToSection('hero')}>
              Filip Veskrna
            </Link>
          </LogoContainer>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
              &#9776;
            </Hamburger>
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
          </>
        )}
      </Nav>
      
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: #8d99ae;
  top: 1rem;
  z-index: 10000;
  height: 60px; /* Ensure this matches the height in App.js */

  @media (max-width: 768px) {

    top: 0;
    width: 5%;
    z-index: 10001;
    margin-left: auto;
    margin-right: 1rem;
    margin-top: 1rem;
  }
`;

const LogoContainer = styled.div`
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    font-size: 1.2rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333; /* Same background color as the site */
    z-index: 10001;
  }
`;

const NavItem = styled.div`
  margin-left: 2rem; /* Adjust spacing between menu items */
  cursor: pointer;
  color: #343a40;
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 25px;

  button {
    background: none;
    border: none;
    color: #a9a9a9;
    cursor: pointer;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 25px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const DownloadButton = styled.a`
  background-color: #ee6c4d; /* Button background color */
  color: #fff; /* Button text color */
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 2rem;
  white-space: nowrap;

  &:hover {
    background-color: #c92a44; /* Darker shade of the button color on hover */
  }

  @media (max-width: 768px) {
    display: block;
    margin: 1rem 0;
    font-size: 1.5rem;
  }
`;

const OverlayMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333; /* Same background color as the site */
  color: #fff;
  z-index: 10001;
`;

const OverlayMenuItem = styled.div`
  margin: 1rem 0;

  button {
    background: none;
    border: none;
    color: #d9d9d9;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
    font-size: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const OverlayDownloadButton = styled.a`
  background-color: #e94560; /* Button background color */
  color: #fff; /* Button text color */
  padding: 0.5rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 1rem 0;
  font-size: 1.5rem;

  &:hover {
    background-color: #c92a44; /* Darker shade of the button color on hover */
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
