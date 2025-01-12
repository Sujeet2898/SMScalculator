import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #e3f2fd; /* Light blue background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.8em;
  color: #0d47a1; /* Dark blue color */
  text-align: center;
  margin-bottom: 20px;
`;

const Element = styled.p`
  font-size: 1.2em;
  color: #1565c0; /* Medium blue color */
  background-color: #bbdefb; /* Light blue background */
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
`;

const AimChemistryDisplay = ({ aimChemistry }) => {
  return (
    <Container>
      <Title>Aim Chemistry</Title>
      {Object.entries(aimChemistry).map(([element, value]) => (
        <Element key={element}>
          {element}: {value}%
        </Element>
      ))}
    </Container>
  );
};

export default AimChemistryDisplay;
