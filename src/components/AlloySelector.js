import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #fff3e0; /* Light orange background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.8em;
  color: #ef6c00; /* Orange color */
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

const Select = styled.select`
  padding: 10px;
  font-size: 1em;
  border: 2px solid #ffa726; /* Orange border */
  border-radius: 5px;
  color: #37474f; /* Dark grey color */
  background-color: #ffffff; /* White background */
  width: 100%;
  box-sizing: border-box;
  &:hover {
    border-color: #fb8c00; /* Darker orange on hover */
  }
  &:focus {
    border-color: #e65100; /* Dark orange on focus */
    outline: none;
  }
`;

const Option = styled.option`
  padding: 10px;
  background-color: #ffffff; /* White background */
  color: #37474f; /* Dark grey color */
`;

const AlloySelector = ({ elements, alloys, selectedAlloys, onAlloyChange }) => {
  return (
    <Container>
      <Title>Select Alloy</Title>
      {elements.map((element) => (
        <FieldContainer key={element}>
          <Label htmlFor={`${element}-alloy`}>{element}: </Label>
          <Select
            id={`${element}-alloy`}
            value={selectedAlloys[element] || ""}
            onChange={(e) => onAlloyChange(e, element)}
          >
            <Option value="">Select Alloy</Option>
            {alloys.map((alloy) => (
              <Option key={alloy.name} value={alloy.name}>
                {alloy.name}
              </Option>
            ))}
          </Select>
        </FieldContainer>
      ))}
    </Container>
  );
};

export default AlloySelector;
