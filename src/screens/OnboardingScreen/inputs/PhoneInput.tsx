import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Button, TextBox, Heading2, Stack } from "../../../components";
import useValidation from "../../../hooks/useValidation";
import { APP_STRINGS } from "../../../utils/constants";
import { NextFunctionArgs } from "../../../utils/types";

const PhoneTextInput = styled(TextBox)`
  width: 400px;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

type PhoneInputProps = {
  onButtonClick?: (args: NextFunctionArgs) => void;
  defaultValue?: string;
};

const PhoneInput: React.FC<PhoneInputProps> = ({
  onButtonClick,
  defaultValue,
}) => {
  const [phone, setPhone] = useState("");

  const isFormValid = useValidation("phone", phone);

  function onPhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value);
  }

  function onNextClick() {
    if (isFormValid) {
      onButtonClick?.({ key: "phone", value: phone, nextStep: 4 });
    }
  }

  useEffect(() => {
    setPhone(defaultValue ?? "");
  }, [defaultValue]);

  return (
    <Stack space={50}>
      <Heading2>{APP_STRINGS.phoneHeader}</Heading2>
      <PhoneTextInput
        placeholder="Phone Number"
        value={phone}
        onChange={onPhoneChange}
        inputMode="numeric"
      />
      <Button text="Let's go" disabled={!isFormValid} onClick={onNextClick} />
    </Stack>
  );
};

export default PhoneInput;
