# Tic Tac Toe Vocab Game

Practice or learn vocabulary by playing tic-tac-toe. In order to add X's and O's to the board, players need to correctly match a picture on the tic-tac-toe board with the written word.

## Table of Contents

# Table of Contents

1. [Example](#Student-Accounts)
2. [Example2](#example2)
3. [Third Example](#third-example)
4. [Fourth Example](#fourth-example)

## Example

## Example2

## Third Example

## [Fourth Example](http://www.fourthexample.com)

## Technologies Used

| Technology | Purpose                 |
| ---------- | ----------------------- |
| Express.js | Used as server for Node |
| Node.js    |

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


