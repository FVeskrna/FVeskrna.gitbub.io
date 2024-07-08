import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HighlightedProjects = () => {
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
      description: 'This project showcases my transition to Fintech. This project highlights my expertise in Python, APIs, and process automation. I developed a script that automates the entire workflow of downloading popular videos from specified subreddits on Reddit using API calls and user-defined filters. These videos are then edited, resized, reformatted, and compiled into a single montage. Utilizing the Google API, the script automatically uploads the final video to a designated YouTube channel. The script is highly customizable, allowing users to specify various parameters for both the source videos and the final montage.',
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
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const handleProjectClick = (id) => {
    switch(id){
      case 1:
        openInNewTab(`/project/VRMeetingRoom`);
      case 2:
        openInNewTab(`/project/VRWorkshop`);
      default:
        openInNewTab(`/project/VRMeetingRoom`);
    }
    
  };

  return (
    <ProjectsSection id="projects">
      <h1>Highlighted Projects</h1>
      <ProjectList>
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
      </ProjectList>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 2rem;
  color: #333;
  min-height: 100vh;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Project = styled.div`
  background-color: #eeeeee;
  margin: 1rem;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  @media (min-width: 1200px) {
    width: calc(33% - 2rem);
  }

  @media (max-width: 1199px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const ProjectDescription = styled.p`
  flex-grow: 1;
  color: #a9a9a9;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  font-size: 20px;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  background-color: #ee6c4d;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  margin: 0.25rem;
`;

export default HighlightedProjects;
