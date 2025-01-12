import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #f9fbe7; /* Light yellow background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.8em;
  color: #d32f2f; /* Red color */
  text-align: center;
  margin-bottom: 20px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1.2em;
  color: #37474f; /* Dark grey color */
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 2px solid #f44336; /* Red border */
  border-radius: 5px;
  color: #37474f; /* Dark grey color */
  background-color: #ffffff; /* White background */
  width: 100%;
  box-sizing: border-box;
  &:hover {
    border-color: #e53935; /* Darker red on hover */
  }
  &:focus {
    border-color: #b71c1c; /* Dark red on focus */
    outline: none;
  }
`;

const OpenChemistryInput = ({ openChemistry, onInputChange }) => {
  return (
    <Container>
      <Title>Open Chemistry</Title>
      {Object.entries(openChemistry).map(([element, value]) => (
        <FieldContainer key={element}>
          <Label htmlFor={element}>{element}: </Label>
          <Input
            type="number"
            id={element}
            name={element}
            value={value}
            onChange={(e) => onInputChange(e, element)}
            step="0.01"
          />
        </FieldContainer>
      ))}
    </Container>
  );
};

export default OpenChemistryInput;
