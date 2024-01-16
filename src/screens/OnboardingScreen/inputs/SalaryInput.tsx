import React, { useState, useEffect } from "react";

import { RadioButtons, Stack, Button, Heading2 } from "../../../components";
import { APP_STRINGS, salaryRangeValues } from "../../../utils/constants";
import { NextFunctionArgs } from "../../../utils/types";

type SalaryInputProps = {
  onButtonClick?: (args: NextFunctionArgs) => void;
  defaultValue?: string;
};

const SalaryInput: React.FC<SalaryInputProps> = ({
  onButtonClick,
  defaultValue,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const isFormValid = Boolean(selectedOption);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  function onNextClick() {
    if (isFormValid) {
      onButtonClick?.({ key: "salaryRange", value: selectedOption });
    }
  }

  useEffect(() => {
    setSelectedOption(defaultValue ?? "");
  }, [defaultValue]);

  return (
    <Stack space={20}>
      <Heading2>{APP_STRINGS.salaryHeader}</Heading2>
      <RadioButtons
        options={salaryRangeValues}
        name="salary"
        selectedOption={selectedOption}
        onChange={handleOptionChange}
      />
      <Button text="Let's go" disabled={!isFormValid} onClick={onNextClick} />
    </Stack>
  );
};

export default SalaryInput;
