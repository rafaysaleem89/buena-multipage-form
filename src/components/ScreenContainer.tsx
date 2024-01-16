import React from "react";
import { styled } from "styled-components";

interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainerWrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;

  @media (max-width: 768px) {
    width: 80vw;
    padding-top: 10px;
  }
`;

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return <ScreenContainerWrapper>{children}</ScreenContainerWrapper>;
};

export default ScreenContainer;
