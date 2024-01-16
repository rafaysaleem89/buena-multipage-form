import React from "react";
import styled from "styled-components";

interface ProgressBarFillProps {
  percentage: number;
}

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.greyDark};
  border-radius: 15px;
  overflow: hidden;
  height: 10px;
`;

const ProgressBarFill = styled.div<ProgressBarFillProps>`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: ${(props) => props.theme.colors.primary};
  transition: width 0.3s ease-in-out;
`;

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarFill percentage={percentage} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
