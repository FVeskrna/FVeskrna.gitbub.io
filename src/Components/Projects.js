import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'VR Meeting Room',
      description: 'This project focuses on the design and implementation of a cross-platform VR application using Unity3D. The application connects users in a virtual environment for presentations mimicking real-world functions. Users can join via a computer using a keyboard and mouse or with a VR headset for enhanced features. The app features three distinct scenes for various uses, including presentations, writing on a virtual whiteboard, and showcasing virtual replicas of physical devices. The flexible design allows for the creation of additional scenes to leverage these functionalities.',
      image: '/path-to-image1.jpg',
      tags: ['VR', 'Unity3D', 'C#', 'Networking'],
      youtubeLinks: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
      githubLink: 'https://github.com/your-repo/vr-meeting-room'
    },
    {
      id: 2,
      title: 'Reddit Video Montage Bot',
      description: 'This project showcases my transition to Fintech.This project highlights my expertise in Python, APIs, and process automation. I developed a script that automates the entire workflow of downloading popular videos from specified subreddits on Reddit using API calls and user-defined filters. These videos are then edited, resized, reformatted, and compiled into a single montage. Utilizing the Google API, the script automatically uploads the final video to a designated YouTube channel. The script is highly customizable, allowing users to specify various parameters for both the source videos and the final montage.',
      image: '/path-to-image2.jpg',
      tags: ['Python', 'API', 'Automation'],
      youtubeLinks: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
      githubLink: 'https://github.com/your-repo/vr-meeting-room'
    },
    {
      id: 3,
      title: 'VR workshop',
      description: 'This VR application simulates a real-life workshop, allowing users to experience a "sandbox" version where they can shape a plank of wood to their needs and connect them using nails or screws to create woodworking objects. The application includes a blueprint system, guiding users through material selection and product creation. An additional feature allows users to assemble an electronic product from given parts, showcasing the application versatility.',
      image: '/path-to-image3.jpg',
      tags: ['VR', 'Unity3D', 'C#'],
      youtubeLinks: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
      githubLink: 'https://github.com/your-repo/vr-meeting-room'
    }
  ];

  const noteworthyProjects = [
    'Noteworthy Project 1',
    'Noteworthy Project 2',
    'Noteworthy Project 3',
    'Noteworthy Project 4',
    'Noteworthy Project 5',
    'Noteworthy Project 6'
  ];

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <>
      <ProjectsSection id="highlighted-projects">
        <h2>Highlighted Projects</h2>
        <HighlightedProjects>
          {projects.map((project) => (
            <Project key={project.id} onClick={() => handleProjectClick(project.id)}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </Project>
          ))}
        </HighlightedProjects>
      </ProjectsSection>
      <ProjectsSection id="noteworthy-projects">
        <h2>Noteworthy Projects</h2>
        <NoteworthyProjects>
          {noteworthyProjects.map((project) => (
            <NoteworthyProject key={project.id} onClick={() => handleProjectClick(project.id)}>
              <ProjectTags>
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </ProjectTags>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </NoteworthyProject>
          ))}
        </NoteworthyProjects>
      </ProjectsSection>
    </>
  );
};

const ProjectsSection = styled.section`
  padding: 2rem;
  height: 100vh;
`;

const HighlightedProjects = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Project = styled.div`
  margin: 1rem 0;
  padding: 2rem;
  display: flex;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 2rem;
`;

const ProjectContent = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 1rem;
`;


const ProjectTags = styled.div`
  margin-top: 1rem;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

const Tag = styled.span`
  background-color: #007bff;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  font-size: 0.9rem;
`;

export default Projects;