import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { NameInput, EmailInput, PhoneInput, SalaryInput } from "./inputs";
import { useFormData } from "../../contexts/FormContext";
import withProtectedForm from "../../hocs/withProtectedForm";
import { Animator, ProgressBar, ScreenContainer } from "../../components";
import { NextFunctionArgs } from "../../utils/types";

const MAX_STEPS = 4;

const OnboardingScreen: React.FC = () => {
  const { step } = useParams();
  const navigate = useNavigate();

  const { formData, setFormData } = useFormData();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(((parseInt(step ?? "0") - 1) / MAX_STEPS) * 100);
  }, [step]);

  const onNextClick = ({ key, value, nextStep }: NextFunctionArgs) => {
    setFormData({
      ...formData,
      [key]: value,
      currentStep: nextStep ?? formData.currentStep,
    });

    const navigateRoute =
      parseInt(step ?? "0") >= MAX_STEPS
        ? "/details"
        : `/onboarding/${parseInt(step ?? "1") + 1}`;

    navigate(navigateRoute);
  };

  const getFormInput = (inputNumber: string) => {
    switch (inputNumber) {
      case "1":
        return (
          <NameInput onButtonClick={onNextClick} defaultValue={formData.name} />
        );
      case "2":
        return (
          <EmailInput
            onButtonClick={onNextClick}
            defaultValue={formData.email}
          />
        );
      case "3":
        return (
          <PhoneInput
            onButtonClick={onNextClick}
            defaultValue={formData.phone}
          />
        );
      case "4":
        return (
          <SalaryInput
            onButtonClick={onNextClick}
            defaultValue={formData.salaryRange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ScreenContainer>
      <ProgressBar percentage={progress} />
      <Animator key={step}>{getFormInput(step ?? "")}</Animator>
    </ScreenContainer>
  );
};

export default withProtectedForm(OnboardingScreen);
