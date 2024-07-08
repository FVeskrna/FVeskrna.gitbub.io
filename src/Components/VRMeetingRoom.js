import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProjectDetail = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sectionsRef = useRef({});

  const scrollToSection = (section) => {
    sectionsRef.current[section]?.scrollIntoView({behavior: 'smooth', block: 'start' });
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
          <pp>
          In my master's thesis, titled "Application of Virtual Reality in the Scope of Industry 4.0", I explore how virtual reality (VR) can be utilized within the context of Industry 4.0. This revolution in industry leverages cutting-edge digital technologies to significantly enhance efficiency and competitiveness. My research focuses on the transformative potential of VR in industrial settings, offering innovative solutions for data visualization, process optimization, and employee training. The primary goal of my work is to develop a VR application that enables multiple users to interact within a virtual environment tailored for various industrial applications.
          </pp>
        </Section>
        <Section ref={(el) => sectionsRef.current['ProjectBackground'] = el}>
          <h2>Chapter 2: Project Background</h2>
          <pp>
            Industry 4.0 represents the ongoing shift towards automation and data exchange in manufacturing technologies. As part of this revolution, technologies such as the Internet of Things (IoT), cloud computing, and cyber-physical systems are integrated into manufacturing processes to create "smart factories." My project delves into how VR, an integral component of this technological shift, can be applied to improve industrial operations. The theoretical framework of my work outlines the principles of Industry 4.0 and introduces the concept of the smart factory. I also discuss how VR, combined with digital models, can play a crucial role in this ecosystem.
          </pp>
        </Section>
        <Section ref={(el) => sectionsRef.current['Implementation'] = el}>
          <h2>Chapter 3: Implementation</h2>
          <pp>
            In the practical part of my thesis, I developed a desktop application designed to connect users within a shared virtual environment. This application can be accessed using either a VR headset or a personal computer with a keyboard and mouse. The application includes three demonstration scenes, each showcasing different industrial applications of VR. Below, I provide a detailed overview of each scene.
          </pp>
          <h3>Development Platform and Tools</h3>
          <pp>
            To create these virtual environments, I utilized the Unity3D development platform, which offers robust features for VR application development. Key aspects of the development process include:

            Unity3D: This platform was chosen for its versatility, ease of use, and comprehensive support for VR development. Unity3D's extensive library of assets and plugins significantly streamlined the development process.
            XR Interaction Toolkit: This toolkit was used to implement interactions within the VR environments. It provides a framework for developing VR applications that support various input devices and interaction methods.
            Networking Capabilities: To enable multi-user functionality, I integrated networking solutions that support real-time communication and interaction between users. This involved setting up servers and managing data synchronization to ensure a smooth and responsive experience.
            User Interface Design: The user interfaces for each scene were carefully designed to be intuitive and user-friendly, ensuring that users can easily navigate and interact with the virtual environments.
            Through these detailed implementations, my thesis demonstrates the practical application of VR technology in industrial settings, showcasing its potential to enhance collaboration, training, and operational efficiency.
          </pp>
          <h3>Scene 1: Meeting Room</h3>
          <pp>
            The Meeting Room scene simulates a virtual conference room where users can interact, share presentations, and collaborate in real-time. This scene is designed to facilitate virtual meetings, which can be especially useful for remote teams or international collaborations. Key features of the Meeting Room include:

            User Avatars: Each participant is represented by a customizable avatar, allowing for a more immersive and personal interaction experience.
            Presentation Tools: Users can upload and display presentation slides, videos, and other multimedia content on a virtual screen. These tools are essential for conducting meetings, briefings, and collaborative discussions.
            Interactive Whiteboard: A virtual whiteboard is available for brainstorming sessions, allowing users to draw, write, and share ideas in real-time.
            Voice and Text Communication: Integrated voice chat and text messaging enable seamless communication between participants, ensuring that everyone can contribute to the discussion regardless of their physical location.
          </pp>
          <h3>Scene 2: Classroom</h3>
          <pp>
            The Classroom scene replicates a virtual classroom environment for training and educational purposes. This scene is ideal for conducting training sessions, workshops, and educational courses. Key features of the Classroom include:

            Interactive Learning Tools: The scene includes virtual tools such as projectors, whiteboards, and interactive elements that enhance the learning experience. These tools allow instructors to deliver engaging and dynamic lessons.
            Student Avatars: Similar to the Meeting Room, students are represented by avatars, making the virtual environment feel more realistic and engaging.
            Quizzes and Assessments: Instructors can create and administer quizzes and assessments within the virtual environment, providing immediate feedback to students.
            Breakout Rooms: The classroom scene supports the creation of breakout rooms for group activities and discussions, fostering collaboration among students.
          </pp>
          <h3>Scene 3: Industrial Hall</h3>
          <pp>
            The Industrial Hall scene represents a virtual industrial hall where users can observe and interact with digital twins of industrial machinery. This scene is particularly useful for remote diagnostics, process optimization, and training on complex machinery. Key features of the Industrial Hall include:

            Digital Twins: The scene features accurate digital replicas of industrial machines, allowing users to explore and interact with these machines in a risk-free virtual environment. These digital twins can be manipulated to demonstrate different operating conditions and scenarios.
            Simulation and Training: Users can simulate various operational scenarios, such as machine maintenance or troubleshooting, to gain practical experience without the risk of damaging actual equipment.
            Data Visualization: Real-time data from the machines can be displayed in the virtual environment, providing users with valuable insights into machine performance and operational metrics.
            Collaboration Tools: Similar to the other scenes, the Industrial Hall includes tools for voice and text communication, enabling users to collaborate effectively during training or diagnostic sessions.
          </pp>              
        </Section>
        <Section ref={(el) => sectionsRef.current['Testing'] = el}>
          <h2>Chapter 4: Testing</h2>
          <pp>
            Testing was a critical phase in ensuring the functionality and effectiveness of the VR application. I conducted comprehensive testing sessions with the help of colleagues to evaluate the application's performance and usability. The testing process involved verifying the seamless connection of multiple users in the virtual environment, assessing the interactive features of each scene, and ensuring compatibility with different hardware setups. Feedback from the testing sessions was used to make iterative improvements to the application, addressing any issues related to user interface, interaction mechanics, and system stability.

            By focusing on these practical aspects, my thesis demonstrates the significant potential of VR in transforming industrial operations, aligning with the principles of Industry 4.0, and paving the way for more efficient, collaborative, and innovative industrial practices.
          </pp>
        </Section>
      </DetailContainer>
    </>
  );
};


const Navigation = styled.div`
  position: fixed;
  width: 60%;
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
  padding: 5rem 25% 10rem 25%;
  text-align: left;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  scroll-margin-top: 80px;
`;

export default ProjectDetail;
