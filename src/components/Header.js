import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 20px;
  background-color: #3f51b5; /* Blue background */
  color: #ffffff; /* White text */
  text-align: center;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.4em;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Alloy Addition Calculator</Title>
    </HeaderContainer>
  );
};

export default Header;
