import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedComponent = styled.div`
  all: inherit;
  opacity: 1;
  animation: ${fadeInFromRight} 0.5s ease-in-out;
`;

type AnimatorProps = {
  children: React.ReactNode;
};

const Animator: React.FC<AnimatorProps> = ({ children }) => {
  return <AnimatedComponent>{children}</AnimatedComponent>;
};

export default Animator;
