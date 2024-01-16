import React from "react";
import { styled } from "styled-components";

interface HeaderProps {
  title: string;
}

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 10vh;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
