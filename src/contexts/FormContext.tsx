import React, { createContext, useContext, useState } from "react";
import { FormDataType } from "../utils/types";

type Props = {
  children: React.ReactNode;
};

interface FormContextProps {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

const initialFormData: FormDataType = {
  name: { firstName: "", lastName: "" },
  email: "",
  phone: "",
  salaryRange: "",
  currentStep: 1,
};

export const FormContext = createContext<FormContextProps>({
  formData: initialFormData,
  setFormData: () => {},
});

export const FormProvider: React.FC<Props> = ({ children }) => {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => {
  return useContext(FormContext);
};
