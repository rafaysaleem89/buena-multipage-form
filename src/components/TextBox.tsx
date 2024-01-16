import React from "react";
import styled from "styled-components";

const TextInputWrapper = styled.input`
  padding: 15px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 8px;
  font-size: 22px;
  display: block;
  margin: 0 auto;
  transition: border-color 0.1s ease;
  transition: border-width 0.1s ease;
  transition: padding 0.1s ease;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    border-width: 2px;
    padding: 17px;
  }
`;

type TextBoxProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextBox: React.FC<TextBoxProps> = ({ ...inputProps }) => {
  return <TextInputWrapper type="text" {...inputProps} />;
};

export default TextBox;
