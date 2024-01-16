import React from "react";

import { Heading1, ScreenContainer } from "../../components";
import { APP_STRINGS } from "../../utils/constants";

const SubmittedScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Heading1>{APP_STRINGS.submitedContent}</Heading1>
    </ScreenContainer>
  );
};

export default SubmittedScreen;
