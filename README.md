# Project Overview: Multi-Page Form with React and TypeScript

## Introduction
This project showcases a multipage form implementation using React and TypeScript. The application is designed to guide users through an onboarding process with a dynamic form that adapts based on the parameters provided in the route.

## Technology Stack
- **React:** The project is built using React, a widely adopted JavaScript library for building user interfaces. Its component-based architecture promotes reusability and maintainability.

- **TypeScript:** TypeScript is used to add static typing to the project, enhancing code quality and developer productivity by catching errors during development.

- **Styled-components:** The application's components are styled using the styled-components library, providing a robust and maintainable way to manage styles in a React application.

- **react-router-dom:** For navigation and styling, react-router-dom is employed. It facilitates dynamic routing, ensuring seamless transitions between different sections of the form.

- **Context API:** The form data is managed globally using React's Context API. This choice was made for its simplicity, making it well-suited for a smaller application like this one. It eliminates the need for prop drilling and provides a clean way to manage global state.

## Project Structure
- **Landing Screen:**The application starts with a LandingScreen and transitions to the onboarding screen based on user interactions.
- **Onboarding Screen:**The form components are dynamically rendered based on the route parameters, creating a personalized onboarding experience.
- **Details Screen:** After completing the onboarding process, users can navigate to the Details Screen, where they can view and edit the entered details.
- **Submitted Screen:** Upon successfully submitting the form, users are directed to the Submitted Screen, displaying a final confirmation message.

## How to Test
To run the project locally, follow these steps:

## How to Test
To run the project locally, follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:

   ```bash
     npm start
   ```

- Access the LandingScreen, click the "Let's go" button to navigate through the onboarding screens, and explore the Details and Submitted Screens after completing the form

## Future Improvements
Given more time, the following enhancements could be considered:

- **Automated Tests:** Utilize the `react-testing-library` to write automated tests, ensuring the reliability and stability of the application.

- **Persistent Form Data:** Store form information in browser storage to allow data persistence across page refreshes.

- **Back Button Functionality:** Implement a back button to allow users to navigate to the previous form entry, enhancing user experience.

- **Design Refinement:** Allocate time for further design improvements to create a more polished and visually appealing user interface.

 **Security Enhancements:**
  - Implement additional security checks to ensure that users cannot move forward to the Details and Submitted Screens if the form data is incomplete or invalid.

- **Detailed Theme:** Enhance the visual appeal by creating a more detailed and comprehensive theme for the application, ensuring a cohesive and engaging user interface.

- **Component Reusability:** Refactor and optimize components for increased reusability across different sections of the application, promoting a more modular and maintainable codebase.


Feel free to go through the project and ask any questions, and feedback is always appreciated!
