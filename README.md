# Tic Tac Toe Vocab Game

Practice or learn vocabulary by playing tic-tac-toe. In order to add X's and O's to the board, players need to correctly match a picture, such as "spaceship" with the picture 🚀.

## Table of Contents

1. [General Information](#General-Information)
1. [Technologies Used](#Technologies-Used)
1. [Features](#Features)
1. [Screenshots](#Screenshots)
1. [Setup](#Setup)
1. [Usage](#Usage)
1. [Project Status](#Project-Status)
1. [Room for Improvement](#Room-for-Improvement)
1. [Acknowledgements](#Acknowledgements)
1. [Contact](##Contact)

## General Information

Teachers of all subjects are constantly working with new vocabulary words. We provide educators a new tool to give students the repetitions they need. The idea came from two public school elementary teachers looking for new ways to engage their students in 2022 during a period of hybrid in-person/remote learning.

## Features

-   Teachers create and save their own vocab lists matched with images
-

## Setup

## [Fourth Example](http://www.fourthexample.com)

## Technologies Used

| Technology    | Purpose                                   |
| ------------- | ----------------------------------------- |
| Express.js    | server framework for Node.js              |
| Node.js       | back-end code                             |
| Handlebars.js | templating engine                         |
| MySQL         | database management system                |
| Sequelize     | ORM for MySQL                             |
| Pure CSS      | CSS Framework                             |
| dotenv        | configuration of environmental variables  |
| bcrypt        | password hashing                          |
| Sortable      | NPM package for dragging/dropping objects |

    "dotenv": "^14.3.2",
    "dragula": "^3.7.3",
    "express": "^4.17.2",
    "express-handlebars": "^6.0.2",
    "mysql2": "^2.3.3",
    "purecss": "^2.0.6",
    "sequelize": "^6.14.1"

## General Info

## Game Explanation

If you've never played, read [Wikipedia's description](https://en.wikipedia.org/wiki/Tic-tac-toe)

## GitHub Issues

_The GitHub issues below define project scope and goals._

### Account Management

#### Tech Needed for Authentication

-   Express (_required_)
-   Handlebars (_required_)
-   Node (_required_)
-   password hashing
    -   does passport.js include password hashing?
    -   use bcrypt if hashing not included in passport.js library
-   authentication options
    -   passport.js (library incorporates json web tokens and OAuth)
    -   probably too complex: do it from scratch with json web tokens (JWT) [Node.js with Passport Authentication](https://www.youtube.com/watch?v=7nafaH9SddU)
    -   OAuth- could allow Google logins
        -   OAuth = protocol
        -   AuthO = a company that does
-   need regex [Omar-recommended tutorial: What is Regex?](https://www.youtube.com/watch?v=r6I-Ahc0HB4)

#### Instructor Accounts

Authentication vs. Authorization will be tricky

-   authentication = allowing people to access a different part of the application
-   Instructors have their own "teacher" admin-level login
-   Teachers can create and save class rosters
    -   Teachers may copy/paste class rosters from a spreadsheet or document to populate player lists
    -   The app will save lists of student names in the instructor account for teachers to re-access when their once again logged in
    -   Teachers can create groups of students and label these groups in various ways:
        -   class (e.g. "Mrs. Balane's class" or "3rd period")
        -   grade (e.g. )
        -   school
        -   custom name?

#### Student Accounts

-   Instructor invites students to join the game
-   students create their own "student" logins
    -   for younger students, option to have "picture" login, where students select an image or series of images?

### Gameplay

#### Gameplay Tech Needed

-   drag/drop functionality
    -   HTML 5 has drag/drop API, but look on NPM
        -   sortablejs
        -   dragula
    -   don't use jQuery for drag/drop. Learn e.g. React in near future

#### Game Setup by Instructor

Before students can start a game, the instructor will...

-   choose vocabulary lists for
    -   rows
    -   columns

### Student/Player Game Setup

As a student/player...

-   I can play other students online (_leave this for a later iteration?_)

### User display during the game

#### Display Setup

-   On each player's screen:

### Gameplay

#### Choose Who Goes First

-   Option to choose who goes first, or have a virtual coin flip

#### Actions During Each Turn

#### Game Ending
