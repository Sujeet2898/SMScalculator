import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #f1f8e9; /* Light green background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.8em;
  color: #388e3c; /* Green color */
  text-align: center;
  margin-bottom: 20px;
`;

const ElementContainer = styled.p`
  font-size: 1.2em;
  color: #2e7d32; /* Dark green color */
  background-color: #dcedc8; /* Light green background */
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
`;

const AlloyAdditionCalculator = ({ aimChemistry, openChemistry, selectedAlloys, alloys }) => {
  const calculateAlloyAddition = (element) => {
    const alloy = alloys.find((a) => a.name === selectedAlloys[element]);
    if (!alloy) return 0;
    const elementPercentage = alloy.composition[element] || 0;
    const recoveryRate = alloy.recoveryRate || 1;

    return (
      ((aimChemistry[element] - openChemistry[element]) * 58000) /
      (recoveryRate * elementPercentage)
    ).toFixed(2);
  };

  return (
    <Container>
      <Title>Alloy Additions (kg)</Title>
      {Object.keys(aimChemistry).map((element) => {
        const selectedAlloy = selectedAlloys[element];
        return (
          <ElementContainer key={element}>
            {selectedAlloy}: {calculateAlloyAddition(element)} kg
          </ElementContainer>
        );
      })}
    </Container>
  );
};

export default AlloyAdditionCalculator;
