import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import "./App.css";
import Header from "./components/Header";
import OnboardingScreen from "./screens/OnboardingScreen";
import LandingScreen from "./screens/LandingScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SubmittedScreen from "./screens/SubmittedScreen";
import { FormProvider } from "./contexts/FormContext";
import { Template } from "./components";
import { theme } from "./utils/theme";

const GlobalStyles = createGlobalStyle`
    body {
      font-family: Lobster;
      margin: 0;
      padding: 0;
    }
  `;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FormProvider>
        <GlobalStyles />
        <Header title="Bueno" />
        <Template>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={LandingScreen} />
              <Route path="/onboarding/:step" Component={OnboardingScreen} />
              <Route path="/details" Component={DetailsScreen} />
              <Route path="/submitted" Component={SubmittedScreen} />
            </Routes>
          </BrowserRouter>
        </Template>
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
