import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Button, TextBox, Heading2, Stack } from "../../../components";
import { useValidation } from "../../../hooks";
import { APP_STRINGS } from "../../../utils/constants";
import { NextFunctionArgs } from "../../../utils/types";

const EmailTextInput = styled(TextBox)`
  width: 400px;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

type EmailInputProps = {
  onButtonClick?: (args: NextFunctionArgs) => void;
  defaultValue?: string;
};

const EmailInput: React.FC<EmailInputProps> = ({
  onButtonClick,
  defaultValue,
}) => {
  const [email, setEmail] = useState("");

  const isFormValid = useValidation("email", email);

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onNextClick() {
    if (isFormValid) {
      onButtonClick?.({ key: "email", value: email, nextStep: 3 });
    }
  }

  useEffect(() => {
    setEmail(defaultValue ?? "");
  }, [defaultValue]);

  return (
    <Stack space={50}>
      <Heading2>{APP_STRINGS.emailHeader}</Heading2>
      <EmailTextInput
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <Button text="Let's go" disabled={!isFormValid} onClick={onNextClick} />
    </Stack>
  );
};

export default EmailInput;
