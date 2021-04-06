# auth-api

# Week 2
# Class07- Lab06
# Auth API Server
## Deployment Test
### Author: Boshra Jaber
* [tests report](https://github.com/BoshraJaber/auth-api/actions)
* [Heroku application for main branch](https://boshra-bearer-auth.herokuapp.com/)
* [Pull Request to main](https://github.com/BoshraJaber/bearer-auth/pull/2)

## Setup
- `.env` requirements:
 * PORT - 3000
 * MONGODB_URI=mongodb://localhost:27017/auth
 * SECRET='somesecret'

- Install Required Packages:
  * `npm i express dotenv base-64 bcrypt mongoose jsonwebtoken morgan express-session fs`
  * `npm i -D @code-fellows/supergoose eslint jest`
  * `npm i -g nodemon`
- Running the app
 * `npm start` or `nodemon`
 1. Endpoint: `/signup`
   * Returns Object Example:
```
  {
    "user": {
        "_id": "606b71e1b7b58d6c7855756c",
        "username": "w",
        "password": "$2b$10$Wcv5T8gqTjXl/XMKJy1Ih.evtQRvb9IC6rxYCDELcblOqix.SXwRO",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InciLCJpYXQiOjE2MTc2NTQyNDEsImV4cCI6MTYxNzY1NDQyMX0.wmRbNfOfJ4QM3eBQaRwA7tukeNxotUzgGBa30w9ZYlc"}

   ```

 2. Endpoint: `/signin`
   * Returns Object:
  ```
  {
    "user": {
        "_id": "606b71e1b7b58d6c7855756c",
        "username": "w",
        "password": "$2b$10$Wcv5T8gqTjXl/XMKJy1Ih.evtQRvb9IC6rxYCDELcblOqix.SXwRO",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InciLCJpYXQiOjE2MTc2NTQzMDMsImV4cCI6MTYxNzY1NDQ4M30.-PH5weEr2wegaEjXNO_9paj5cPbs--fHUf6gaIOpPmg"}
  ``` 

 3. Endpoint: `/error`
   * Returns Object:
  ```
  {
   "error": "Something went wrong!",
   "route": "/error",
   "message": "Error with the server"
   }
  ```
 4. Endpoint: `/random`
   * Returns Object:
  ```
  {
   "error": 404,
   "route": "/",
   "message": "Not Found"
   }
  ```
  5. Endpoint: `/users`
   * Returns Array of users:
  ```
  [
    "user1",
    "user2",
  ]
  ```
  6. Endpoint: `/secret`
   * Returns :
   `"Welcome to the secret area!"`



- In package.json file add:
 ```
"scripts": {
    "start": "node index.js",
    "watch": "nodemon index.js",
    "test-watch": "jest --watchAll",
    "test": "jest"
  },
  "jest": {
    "testEnvironment": "node" },
  ```

## Tests
Unit Tests: `npm run test`
Lint Tests: `npm run lint`

## UML:
Here is a UML of my code:

![](./src/lab08.png)

## WRRC:
Here is a WRRC of my code:

![](./src/WRRCLab8.png)