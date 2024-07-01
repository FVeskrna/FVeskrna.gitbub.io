import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id); // Function to get project data by ID

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <DetailContainer>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Videos>
        {project.videos.map((video, index) => (
          <iframe
            title='Title'
            key={index}
            width="560"
            height="315"
            src={video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </Videos>
      <Links>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {/* Add other links as needed */}
      </Links>
    </DetailContainer>
  );
};

const getProjectById = (id) => {
  const projects = [
    {
      id: '1',
      title: 'VR Meeting Room',
      description: 'This project focuses on the design and implementation of a cross-platform VR application using Unity3D.',
      videos: ['https://www.youtube.com/embed/xyz123'],
      github: 'https://github.com/username/repo1'
    },
    {
      id: '2',
      title: 'Reddit Video Montage Bot',
      description: 'This project highlights my expertise in Python',
      videos: ['https://www.youtube.com/embed/abc456'],
      github: 'https://github.com/username/repo2'
    },
    {
      id: '3',
      title: 'VR workshop',
      description: 'This VR application simulates a real-life workshop, allowing users to experience a "sandbox" version.',
      videos: ['https://www.youtube.com/embed/def789'],
      github: 'https://github.com/username/repo3'
    }
  ];

  return projects.find(project => project.id === id);
};

const DetailContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Videos = styled.div`
  margin-top: 2rem;
`;

const Links = styled.div`
  margin-top: 2rem;

  a {
    margin-right: 1rem;
    color: #e94560;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ProjectDetail;
