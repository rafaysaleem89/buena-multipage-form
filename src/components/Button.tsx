import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonWrapper = styled.button`
  padding: 15px 100px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: translateY(-3px);
  transition: box-shadow 0.3s ease;
  transition: transform 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.grey};
    cursor: not-allowed;
    box-shadow: none;
    transform: translateY(3px);
  }

  @media (max-width: 768px) {
    padding: 10px 50px;
  }
`;

const Button: React.FC<ButtonProps> = ({ text, ...buttonProps }) => {
  return <ButtonWrapper {...buttonProps}>{text}</ButtonWrapper>;
};

export default Button;
