import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

interface InfoProps {
  label: string;
  value: string;
  stepNumber: number;
}

const Container = styled.div`
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 1px 8px;
  display: flex;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: space-between;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
`;

const Text = styled.p`
  font-size: 20px;
`;

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
`;

const InfoContainer: React.FC<InfoProps> = ({ label, value, stepNumber }) => {
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/onboarding/${stepNumber}`);
  };

  return (
    <Container>
      <LabelContainer>
        <Label>{label}: </Label>
        <Text>{value}</Text>
      </LabelContainer>
      <EditButton onClick={onEdit}>
        <FaEdit />
      </EditButton>
    </Container>
  );
};

export default InfoContainer;
