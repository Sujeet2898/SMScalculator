import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GradeSelector from "./components/GradeSelector";
import AimChemistryDisplay from "./components/AimChemistryDisplay";
import OpenChemistryInput from "./components/OpenChemistryInput";
import AlloySelector from "./components/AlloySelector";
import AlloyAdditionCalculator from "./components/AlloyAdditionCalculator";
import aimChemistryData from "./data/aimChemistry";
import alloyPercentages from "./data/alloyPercentages";

const Container = styled.div`
  padding: 20px;
  background-color: #eceff1; /* Light grey background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 40px auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  & > div {
    flex: 1;
    margin: 10px;
  }
`;

const App = () => {
  const [selectedGrade, setSelectedGrade] = useState(aimChemistryData[0].grade);
  const [openChemistry, setOpenChemistry] = useState(
    Object.fromEntries(Object.keys(aimChemistryData[0].chemistry).map((key) => [key, 0]))
  );
  const [selectedAlloys, setSelectedAlloys] = useState({});

  const handleGradeChange = (e) => {
    const grade = e.target.value;
    setSelectedGrade(grade);
    const gradeChemistry = aimChemistryData.find((g) => g.grade === grade).chemistry;
    setOpenChemistry(Object.fromEntries(Object.keys(gradeChemistry).map((key) => [key, 0])));
  };

  const handleInputChange = (e, element) => {
    setOpenChemistry({ ...openChemistry, [element]: parseFloat(e.target.value) });
  };

  const handleAlloyChange = (e, element) => {
    setSelectedAlloys({ ...selectedAlloys, [element]: e.target.value });
  };

  const aimChemistry = aimChemistryData.find((g) => g.grade === selectedGrade).chemistry;

  return (
    <Container>
      <Header />
      <Row>
        <GradeSelector grades={aimChemistryData} selectedGrade={selectedGrade} onGradeChange={handleGradeChange} />
      </Row>
      <Row>
        <AimChemistryDisplay aimChemistry={aimChemistry} />
        <OpenChemistryInput openChemistry={openChemistry} onInputChange={handleInputChange} />
        <AlloySelector
          elements={Object.keys(aimChemistry)}
          alloys={alloyPercentages}
          selectedAlloys={selectedAlloys}
          onAlloyChange={handleAlloyChange}
        />
        <AlloyAdditionCalculator
          aimChemistry={aimChemistry}
          openChemistry={openChemistry}
          selectedAlloys={selectedAlloys}
          alloys={alloyPercentages}
        />
      </Row>
    </Container>
  );
};

export default App;
