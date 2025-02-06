Random Quote Generator
A simple React app that fetches random quotes from a JSON file and displays them on a webpage. Users can click a button to generate a new random quote along with its author.

Features
Displays a random quote each time the user clicks the "Get Random Quote" button.
Fetches quote data from a local JSON file (public/quotes.json).
Includes basic styling with responsive design.
Mobile-friendly and easy to use.

Technologies Used
React: Frontend JavaScript library to build the user interface.
CSS: Styling for the app's layout and components.
JSON: Data format for storing quotes.

Structure
The basic structure of the app:
/quotes
│
├── /src
│   ├── /components
│   │   └── Quotegeneration.jsx     # Main component for random quote generation
│   │   └── quote.css               # Styling for the quote components
│   ├── App.js                      # Main App component
│   ├── index.js                    # Entry point for the app
│
├── /public
│   ├── quotes.json                 # JSON file containing quotes and authors
│   ├── index.html                  # HTML template
│
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
