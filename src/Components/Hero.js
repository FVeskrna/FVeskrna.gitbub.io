import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <div>
          <h1>Hello, I'm Filip Veškrna</h1>
          <p>
            I am a passionate full-stack software developer specializing in the fintech industry. With a keen interest in cutting-edge technologies, I devote my spare time to crafting immersive VR applications using Unity3D. Automation enthusiast by nature, I leverage my skills to streamline processes and enhance efficiency wherever possible.
          </p>
        </div>        
      </HeroContent>
      <HeroImage src="/Portrait.png" alt="Filip Veškrna" />
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color: #fff;
  text-align: center;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  max-width: 800px;
`;

const HeroImage = styled.img`
  width: 543px; /* Adjust image width as needed */
  height: 435px; /* Adjust image height as needed */
  border-radius: 50%; /* Make the image round */
  z-index: 1001;
`;

export default Hero;
