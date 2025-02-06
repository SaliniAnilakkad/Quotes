# Random Quote Generator

A simple React app that fetches random quotes from a JSON file and displays them on a webpage. Users can click a button to generate a new random quote along with its author.

## Features

- Displays a random quote each time the user clicks the "Get Random Quote" button.
- Fetches quote data from a local JSON file (`public/quotes.json`).
- Includes basic styling with responsive design.
- Mobile-friendly and easy to use.

## Technologies Used

- **React**: Frontend JavaScript library to build the user interface.
- **CSS**: Styling for the app's layout and components.
- **JSON**: Data format for storing quotes.

## Structure

The basic structure of the app:
/quotes ├── /src # Source code for the application │ ├── /components # Contains React components for the app │ │ ├── Quotegeneration.jsx # Main component for generating and displaying random quotes │ │ └── quote.css # Styling for the quote components │ ├── App.js # Main App component that renders the entire app │ ├── index.js # Entry point for the React application │ ├── /public # Public assets and static files │ ├── quotes.json # JSON file containing the quotes and their authors │ ├── index.html # HTML template for the app │ ├── package.json # Contains project dependencies and scripts └── README.md # This file, containing project details and instructions


### Explanation:

- **`/quotes`**: This is the root folder of the project, containing all the source code and public assets.
- **`/src`**: Contains the source code for the app, including React components and the main logic.
  - **`/components`**: Contains all the components that are used in the app. `Quotegeneration.jsx` is the main component, and `quote.css` is the CSS file for styling.
  - **`App.js`**: The main app component that integrates all the components together.
  - **`index.js`**: The entry point for the React app where everything starts.
- **`/public`**: Contains static files like JSON data, the HTML template, etc.
  - **`quotes.json`**: The JSON file that stores the quotes and their authors.
  - **`index.html`**: The base HTML file that serves the app's page.
- **`package.json`**: Contains metadata about the project, including dependencies and build scripts.
- **`README.md`**: This file, which explains the project and provides instructions.
