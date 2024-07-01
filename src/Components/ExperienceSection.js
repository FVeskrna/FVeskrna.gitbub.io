import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const ExperienceSectionContainer = styled.section`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 80%
`;

const ExperienceList = styled.div`
  flex: 1;
  margin: 0rem 4rem
`;

const SummaryContainer = styled.div`
  flex: 2;
  padding-left: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  cursor: pointer;
  margin-bottom: 10px;
`;

const SummaryHeading = styled.h3`
  margin-top: 0;
`;

const ExperienceSection = () => {
  // Define your experience and education data
  const [selectedItem, setSelectedItem] = useState(null); // To track selected item

  const educationData = [
    { id: 1, type: 'education', title: "Bachelor's Degree in Software Engineering", summary: "Completed with exceptional marks (Red diploma) at University XYZ." },
    { id: 2, type: 'education', title: "Master's Degree in Computer Science", summary: "Graduated with honors from University ABC." },
    // Add more education entries as needed
  ];
  // Sample data (replace with your own)
  const experienceData = [
    { id: 3, type: 'experience', title: "Intern at Nuvia", summary: "Worked on frontend development using React and backend with Node.js." },
    { id: 4, type: 'experience', title: "Software developer at FNZ", summary: "Assisted in developing mobile applications using React Native." },
    // Add more experiences as needed
  ];

  
  

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <ExperienceSectionContainer  id="experience">
      <h2>Experience and Education</h2>
      <ExperienceContainer>
        {/* Left side: List of items */}
        <ExperienceList>
          <List>
            {[...educationData,...experienceData ].map(item => (
              <ListItem key={item.id} onClick={() => handleItemClick(item)}>
                {item.title}
              </ListItem>
            ))}
          </List>
        </ExperienceList>
        {/* Right side: Display selected item summary */}
        <SummaryContainer>
          {selectedItem && (
            <>
              <SummaryHeading>{selectedItem.title}</SummaryHeading>
              <p>{selectedItem.summary}</p>
            </>
          )}
          {!selectedItem && <p>Select an item to see details.</p>}
        </SummaryContainer>
      </ExperienceContainer>
    </ExperienceSectionContainer>
  );
};

export default ExperienceSection;
