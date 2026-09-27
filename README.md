# Productivity Dashboard

A frontend practice project for organizing everyday tasks, plans, goals, and focused work in one dashboard.

## Features

- Displays the current date, time, and location on the dashboard.
- Shows current weather details for Bhopal using the OpenWeatherMap API.
- Add tasks, mark them as important, and remove them when completed.
- Stores tasks in the browser with `localStorage` so they remain available after refreshing.
- Provides an hourly daily planner from 6:00 AM to midnight, with saved entries.
- Fetches and displays a random motivational quote and its author.
- Includes a 25-minute Pomodoro timer with Start, Pause, and Reset controls.
- Add daily goals, mark them as important, and remove them when completed.
- Uses dashboard cards and back buttons to navigate between feature views.

## Tech Stack

- HTML
- CSS
- JavaScript
- Browser `localStorage`
- OpenWeatherMap API
- DummyJSON Quotes API


## How to Run Locally

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Open the project folder.
3. Open `index.html` in a web browser.

## What I Practiced

- **HTML:** Structuring the dashboard, feature sections, forms, inputs, buttons, and semantic page content.
- **CSS:** Creating the dashboard layout, responsive wrapping of feature cards, custom fonts, colors, backgrounds, spacing, and interactive states.
- **JavaScript:** Handling click and form events, dynamically rendering tasks and goals, updating the clock, working with timers, calling APIs with `fetch`, and saving data with `localStorage`.

## Project Structure

```text
Productive_Dashboard/
├── fonts/
│   ├── AeonikTRIAL-Bold.otf
│   ├── AeonikTRIAL-Light.otf
│   ├── AeonikTRIAL-Regular.otf
│   └── apple-touch-icon.png
├── index.html
├── script.js
├── style.css
└── README.md
```

## Learning Outcome

Building this project helped me practice connecting a webpage to JavaScript interactions, organizing several features inside one interface, persisting user input in the browser, and working with data from external APIs.

## Future Improvements

- Add a real project screenshot to the preview section.
- Improve validation for empty task and goal submissions.
- Display task and goal details in their saved cards.
- Add an option to edit existing tasks, plans, and goals.
- Improve error handling when weather or quote APIs are unavailable.
- Make the layout more adaptable for smaller screens.

## Author

**Ashish Raj**
