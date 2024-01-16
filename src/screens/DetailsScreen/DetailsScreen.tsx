import React from "react";
import { useNavigate } from "react-router-dom";

import InfoContainer from "./components/InfoContainer";

import { Button, ScreenContainer, Heading2, Stack } from "../../components";
import { useFormData } from "../../contexts/FormContext";
import { APP_STRINGS, salaryRangeValues } from "../../utils/constants";

const getSalaryRangeLabel = (salaryRange: string) => {
  const salaryRangeOption = salaryRangeValues.find(
    (option) => option.value === salaryRange
  );
  return salaryRangeOption?.label ?? "";
};

const DetailsScreen: React.FC = () => {
  const navigate = useNavigate();

  const { formData } = useFormData();
  const { name, email, phone, salaryRange } = formData;

  function acceptHandler() {
    navigate("/submitted", { replace: true });
  }

  return (
    <ScreenContainer>
      <Stack space={20}>
        <Heading2>{APP_STRINGS.detailsHeader}</Heading2>
        <InfoContainer
          label="Name"
          value={`${name.firstName} ${name.lastName}`}
          stepNumber={1}
        />
        <InfoContainer label="Email" value={email} stepNumber={2} />
        <InfoContainer label="Phone" value={phone} stepNumber={3} />
        <InfoContainer
          label="Salary"
          value={getSalaryRangeLabel(salaryRange)}
          stepNumber={4}
        />
        <Button text="Looks Good!" onClick={acceptHandler} />
      </Stack>
    </ScreenContainer>
  );
};

export default DetailsScreen;
