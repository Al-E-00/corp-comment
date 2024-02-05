# Feedback Management System

This project is a Feedback Management System built using React and TypeScript. It is designed to allow users to add feedback items and filter them based on the company name. The project is structured in a modular way, with a clear separation of concerns to ensure maintainability and scalability.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Feedback Management System is a web application that allows users to add feedback items for different companies. Each feedback item is associated with a company, identified by a hashtag in the feedback text. The application provides a list of unique companies based on the feedback items and allows users to filter the feedback items by company.

The application is built using React, a popular JavaScript library for building user interfaces, and TypeScript, a statically typed superset of JavaScript that adds types to the language. The use of TypeScript helps catch errors early in the development process and enhances the development experience with features like autocompletion, type inference, and type checking.

The state management of the application is handled using Zustand, a small, fast, and scalable barebones state-management solution. It has a simple and intuitive API that allows for a clear and concise way of managing and updating state.

The application follows the principles of modern web development, such as component-based architecture, unidirectional data flow, and declarative programming. It also uses modern JavaScript features, such as ES6 syntax, arrow functions, and promises.

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`

## Usage

To use the application, navigate to the URL provided by the development server. You can add new feedback items using the form at the top of the page. You can filter the feedback items by clicking on the hashtags.

## Project Structure

The project is structured as follows:

- `src/App.tsx`: The main application component. This is the entry point of the application.
- `src/components/feedback/FeedbackItem.tsx`: Component for individual feedback items. Each feedback item is displayed using this component.
- `src/components/feedback/FeedbackList.tsx`: Component for displaying a list of feedback items. This component uses FeedbackItem to display each item in the list.
- `src/components/hashtag/HashtagItem.tsx`: Component for individual hashtag items. Each hashtag is displayed using this component.
- `src/components/hashtag/HashtagList.tsx`: Component for displaying a list of hashtags. This component uses HashtagItem to display each item in the list.
- `src/components/header/FeedbackForm.tsx`: Form component for adding new feedback items. This component handles the form submission and updates the state with the new feedback item.
- `src/components/header/Logo.tsx`: Component for the application logo.
- `src/components/header/PageHeading.tsx`: Component for the page heading.
- `src/components/header/Pattern.tsx`: Component for displaying a pattern.
- `src/components/layout/Container.tsx`: Layout component for the application container.
- `src/components/layout/Footer.tsx`: Layout component for the application footer.
- `src/components/layout/Header.tsx`: Layout component for the application header.
- `src/components/utilities/ErrorMessage.tsx`: Utility component for displaying error messages.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## Open Source

This project is open source. Feel free to use, modify, and distribute the code as you see fit. Please consider giving credit to the original [author](https://github.com/ByteGrad) if you find this project useful.
