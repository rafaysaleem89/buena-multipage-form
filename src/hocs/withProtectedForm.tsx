import React, { useEffect } from "react";
import { useFormData } from "../contexts/FormContext";
import { useParams, useNavigate } from "react-router-dom";

//This HOC is used to protect the form from being accessed by the user if the previous steps are not completed.
const withProtectedForm = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const { formData } = useFormData();
    const { currentStep } = formData;

    const { step } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      const isPreviousStepCompleted = currentStep >= parseInt(step ?? "0");

      if (!isPreviousStepCompleted) {
        navigate(`/onboarding/${currentStep}`);
      }
    }, [currentStep]);

    return <WrappedComponent {...props} />;
  };
};

export default withProtectedForm;
