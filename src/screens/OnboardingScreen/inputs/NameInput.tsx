import React, { useEffect, useState } from "react";

import { Button, TextBox, Heading2, Stack } from "../../../components";
import { useValidation, useMobile } from "../../../hooks";
import { APP_STRINGS } from "../../../utils/constants";
import { NextFunctionArgs } from "../../../utils/types";

type NameInputProps = {
  onButtonClick?: (args: NextFunctionArgs) => void;
  defaultValue?: { firstName: string; lastName: string };
};

const NameInput: React.FC<NameInputProps> = ({
  onButtonClick,
  defaultValue,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameValidated = useValidation("name", firstName);
  const lastNameValidated = useValidation("name", lastName);

  const isFormValid = firstNameValidated && lastNameValidated;

  const isMobile = useMobile();

  function onFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }

  function onLastNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  function onNextClick() {
    if (isFormValid) {
      onButtonClick?.({
        key: "name",
        value: { firstName, lastName },
        nextStep: 2,
      });
    }
  }

  useEffect(() => {
    setFirstName(defaultValue?.firstName ?? "");
    setLastName(defaultValue?.lastName ?? "");
  }, [defaultValue]);

  return (
    <Stack space={isMobile ? 20 : 50}>
      <Heading2>{APP_STRINGS.nameHeader}</Heading2>
      <Stack space={20} direction={isMobile ? "vertical" : "horizontal"}>
        <TextBox
          placeholder="First name"
          value={firstName}
          onChange={onFirstNameChange}
        />
        <TextBox
          placeholder="Last name"
          value={lastName}
          onChange={onLastNameChange}
        />
      </Stack>
      <Button text="Let's go" disabled={!isFormValid} onClick={onNextClick} />
    </Stack>
  );
};

export default NameInput;
