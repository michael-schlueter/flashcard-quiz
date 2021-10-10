# Flashcard Quiz
> This is a small React application to generate Flashcard quizzes.



## General Information
- I undertook this project to solidify my understanding of connecting a React app to an API to get and render its data dynamically
- Furthermore I wanted to gain further knowledge about animating with CSS



## Technologies Used
- React 17.0.2
- [Open Trivia API](https://opentdb.com/api_config.php)



## Features
- Generating Flashcard quizzes using the Open Trivia API
- Displaying Flashcard quizzes for different categories (e.g., movies, video games, sports, geography)
- Flipping animation to display questions / answers
- Customizing the amount of questions in the quiz and display them dynamically using CSS Grid



## Screenshots
![Example screenshot](https://i.ibb.co/G7P4p56/flashcard-quiz-screenshot.jpg)



## Setup
The dependencies which are necessary to run this app can be found in the package.json file.

1. Install NPM packages 
```
npm install
```
2. Run the app typing
```
npm start
```
in your terminal. Visit localhost:3000 in your browser.



## Learnings
- Connecting a React App to an external API (asynchronous requests, rendering the data)
- Using sort() array method to randomly display the possible answers
- Using CSS animations to flip the cards (transform / transform-style)
- Working with the useRef() hook to target specific elements



## Project Status
The project is finished.



## Acknowledgements
- This project was based on [this tutorial](https://www.youtube.com/watch?v=hEtZ040fsD8).



