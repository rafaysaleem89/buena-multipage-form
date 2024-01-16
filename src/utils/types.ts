export type FormDataType = {
  name: { firstName: string; lastName: string };
  email: string;
  phone: string;
  salaryRange: string;
  currentStep: number;
};

export type NextFunctionArgs =
  | {
      key: "name";
      value: { firstName: string; lastName: string };
      nextStep?: number;
    }
  | {
      key: "email" | "phone" | "salaryRange";
      value: string;
      nextStep?: number;
    };
