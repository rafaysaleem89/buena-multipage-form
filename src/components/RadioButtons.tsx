import React from "react";
import styled from "styled-components";

export const RadioButtonContainer = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: 300px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.greyLight};
  cursor: pointer;
  transition: padding 0.3s ease;
  &:hover {
    padding: 13px;
  }
`;

export const RadioButtonInput = styled.input`
  margin-right: 15px;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:checked {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
  }
  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RadioButtonLabel = styled.span`
  font-size: 20px;
`;

type Option = {
  value: string;
  label: string;
};

type RadioButtonProps = {
  options: Option[];
  selectedOption: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RadioButtons: React.FC<RadioButtonProps> = ({
  options,
  selectedOption,
  ...radioButtonProps
}) => {
  return (
    <>
      {options.map((option) => {
        return (
          <RadioButtonContainer>
            <RadioButtonInput
              type="radio"
              value={option.value}
              {...radioButtonProps}
              checked={selectedOption === option.value}
            />
            <RadioButtonLabel>{option.label}</RadioButtonLabel>
          </RadioButtonContainer>
        );
      })}
    </>
  );
};

export default RadioButtons;
