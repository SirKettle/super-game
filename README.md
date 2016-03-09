# super-game
A simple JavaScript game using RxJs, ES6, React and Canvas

Objectives:
* [ ] To master RxJs
* [ ] To improve my canvas skills
* [ ] Something to add to my site
* [ ] For fun and for the boys

Todo:
* [ ] Set up Gulp
* [ ] Babel for ES6
* [ ] RxJs used for game state / engine
* [ ] React to render dumb components
* [ ] Canvas to render game inside component


# Architecture

1. Service - provides streams of data, houses core logic
2. Layout - holds Containers - controls styles and layout
3. Container - simply to handle data between services and components. No styles/layout
4. Component - dumb - reacts to data - renders html and handles component styles and layout

Example
* [x] GameService - exports getGameLoopStream or getEnemyShotsStream
* [x] InGameLayout - basic html structure and layout styles. Imports GameContainer
* [x] GameContainer - Handles data between GameService and GameComponent. Just imports and renders GameComponent
* [x] GameComponent - Gets data in props from GameContainer. Renders canvas using canvas utils helper. Requests changes to parent Container


# Building
*Todo* ie npm install then npm run dev


# Publishing
*Todo* ie npm run prod
