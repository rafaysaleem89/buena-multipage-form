import { useState, useEffect } from "react";

type ValidationType = "name" | "phone" | "email";
type ValueType = string;


//This hook is used to validate the user's input.
const useValidation = (type: ValidationType, value: ValueType): boolean => {
  const [isValidated, setIsValidated] = useState(false);

  const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-Z]{2,}$/;
    return nameRegex.test(name);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(\+|\d)[0-9]{8,15}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  useEffect(() => {
    switch (type) {
      case "name":
        setIsValidated(validateName(value));
        break;
      case "phone":
        setIsValidated(validatePhone(value));
        break;
      case "email":
        setIsValidated(validateEmail(value));
        break;
      default:
        break;
    }
  }, [type, value]);

  return isValidated;
};

export default useValidation;
