import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f4c3; /* Light green background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #37474f; /* Dark grey color */
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1em;
  border: 2px solid #81c784; /* Light green border */
  border-radius: 5px;
  color: #37474f; /* Dark grey color */
  background-color: #ffffff; /* White background */
  &:hover {
    border-color: #4caf50; /* Darker green on hover */
  }
  &:focus {
    border-color: #1b5e20; /* Dark green on focus */
    outline: none;
  }
`;

const Option = styled.option`
  padding: 10px;
  background-color: #ffffff; /* White background */
  color: #37474f; /* Dark grey color */
`;

const GradeSelector = ({ grades, selectedGrade, onGradeChange }) => {
  return (
    <Container>
      <Label htmlFor="grade-selector">Select Grade:</Label>
      <Select id="grade-selector" value={selectedGrade} onChange={onGradeChange}>
        {grades.map((grade) => (
          <Option key={grade.grade} value={grade.grade}>
            {grade.grade}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default GradeSelector;
