import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Heading1, ScreenContainer } from "../../components";
import { APP_STRINGS } from "../../utils/constants";

const LandingScreen: React.FC = () => {
  const navgate = useNavigate();

  const handleButtonClick = () => {
    navgate("/onboarding/1");
  };

  return (
    <ScreenContainer>
      <Heading1>{APP_STRINGS.homePageContent}</Heading1>
      <Button text="Lets go" onClick={handleButtonClick} />
    </ScreenContainer>
  );
};

export default LandingScreen;
