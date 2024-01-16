import React from "react";
import { styled } from "styled-components";

interface TemplateProps {
  children: React.ReactNode;
}

const TemplateBody = styled.div`
  height: 85vh;
  justify-content: center;
  display: flex;
`;

//Used for giving a basic layout to the application.
const Template: React.FC<TemplateProps> = ({ children }) => {
  return <TemplateBody>{children}</TemplateBody>;
};

export default Template;
