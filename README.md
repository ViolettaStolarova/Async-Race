# Async Race 🚗

## Description
Async Race - SPA manages the collection of cars, operate their engines, and show race statistics

## Deploy
[Async Race](https://violettastolarova.github.io/async-race/build/)

## Features
 - SPA application with 2 pages: garage and winners table
 - CRUD operations on cars
 - Car driving animations with effects
 - Color selection from an RGB palette
 - Pagination on each page
 - Adaptive, self-invented design

## Tech stack
 - Typescript
 - Webpack
 - Eslint, Prettier

## Setup and Running:
- Clone this repo: $ git clone https://github.com/ViolettaStolarova/async-race.git
- Go to folder async-race-api: $ cd async-race-api
- Install dependencies: $ npm install
- Start server: $ npm start
- Follow the deploy [link](https://violettastolarova.github.io/async-race/build/)

### Basic Structure
- Two main views: "Garage" and "Winners", each with their name, page number, and a count of items in the database.
- Persistent view state between switches, maintaining user input and pagination.

### Garage View
- CRUD operations for cars with "name" and "color" attributes.
- Color selection from an RGB palette with a preview of the car in the chosen color.
- Pagination to display cars (7 per page) and a feature to generate 100 random cars at once.

### Car Animation
- Start/stop engine buttons with corresponding animations and handling of engine states.
- Adaptive animations that work on screens as small as 500px.

### Race Animation
- A button to start a race for all cars on the current page.
- A reset button to return all cars to their starting positions.
- Display the winner's name upon race completion.

### Winners View
- Display winning cars with their image, name, number of wins, and best time.
- Pagination and sorting capabilities by wins and best times.
