import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NoteworthyProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 4,
      title: 'Project 4',
      description: 'Description of Project 4',
      tags: ['Tag1', 'Tag2'],
      youtubeLinks: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
      githubLink: 'https://github.com/your-repo/vr-meeting-room'
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description of Project 5',
      tags: ['Tag1', 'Tag2'],
      youtubeLinks: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
      githubLink: 'https://github.com/your-repo/vr-meeting-room'
    },
    // Add more projects as needed
  ];

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <ProjectsSection id="noteworthy-projects">
      <h1>Noteworthy Projects</h1>
      <ProjectList>
        {projects.map((project) => (
          <Project key={project.id} onClick={() => handleProjectClick(project.id)}>
            <ProjectTags>
              {project.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
              ))}
            </ProjectTags>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Project = styled.div`
  background-color: #eeeeee;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  flex-shrink: 0;
`;

const ProjectContent = styled.div`
  padding: 1rem;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const ProjectDescription = styled.p`
  margin: 0;
  flex-grow: 1;
  color: #a9a9a9;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  font-size: 20px;
`;

const Tag = styled.span`
  background-color: #ee6c4d;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  margin-right: 0.5rem;
  white-space: nowrap;
`;

export default NoteworthyProjects;
