# Pong Game Starter

A starter project for a basic pong game using SVGs.

## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Deploy

The deployment workflow for this project will be a bit different from what you've used when deploying simple static websites.

To deploy your finished Pong project as a GitHub page, you must first **update the `predeploy` script in the `package.json` file with the name of your repo.**

For example, if your repo URL is:

https://github.com/bob/pong-project

Update the `predeploy` script as follows:

```json
"predeploy": "rm -rf dist && parcel build index.html --public-url /pong-project",
```

Once you have done this, you can run:

`$ npm run deploy`

Now check out your deployed site 🙂
# pong-game

## How to play PONG game
Press 'spacebar' to pause the game Press 'n' to start a new game

For player 1 paddle

Press 'A' to move paddle up Press 'Z' to move paddle down

For player 2 paddle

Press '↑' arrowup to move paddle up Press '↓' arrowdown to move paddle down

## What have I learn from this project
In this project I have learned:

extensively use javascript as a programming language
learned about SVG
how to import and export and comminucate between different files within the parent file