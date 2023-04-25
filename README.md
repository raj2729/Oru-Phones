# Assignment of Mobilicis India Private Limited (Oru Phones)

## Project Structure
```
.
├── backend/                -> Contains Backend Development of the application     
├── frontend/               -> Contains Frontend Development of the application
```

## Features and technologies used

- Frontend Application developed using ReactJS
- Backend Application developed using NodeJS and ExpressJS
- Data stored in cloud via MongoDB Atlas
- User Interface developed using MaterialUI

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```
  npm install npm@latest -g
  ```

### Installation

- Clone the repository
  ```
  git clone https://github.com/raj2729/Oru-Phones.git
  ```
- Install NPM packages for Backend Application

  ```
  cd backend
  npm install
  ```

- Install NPM packages for Frontend Application

  ```
  cd frontend
  npm install
  ```

- The Backend Server is running on port `8080`
- The Frontend Application is running on port `3000`
- Currently both the frontend and Backend Applications are running on `localhost`

### Usage

- The run the Backend Server 

```
cd backend
npm run server
```
- The run the Frontend Application

```
cd frontend
npm start
```
## Backend Development (APIs)
```
.
├── config/                 -> Contains middleware for connecting with the database
├── models/                 -> Contains database models (User Model)
├── controllers/            -> Contains the programming logic of the API endpoints
├── routes/                 -> Files exporting respective routers for endpoints (API Endpoints)
├── index.js                -> Main File
└── package.json            -> Npm package.json file
```
## API Endpoints
All root endpoints have their separate router in `./routes` folder

|Endpoints              |Description                                                                    |Methods               |
|-----------------------|-------------------------------------------------------------------------------|----------------------|
|/                      |Home Page                                                                      |GET                   |
|/user/lowerIncomeAndLuxryCar                | Displays List Of Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.                                                        |GET                   |
|/user/maleUsersAndHigherPhonePrice                 | Displays List Of Male Users which have phone price greater than 10,000                                                        |GET                   |
|/user/lastNameAndGreaterQuoteLength                 | Displays List Of Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.                                                        |GET                   |
|/user/luxuryCarAndNoDigitInEmail                | Displays List Of Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.                                                        |GET                   |
|/user/topTenCities                | Show the data of top 10 cities which have the highest number of users and their average income.                                                        |GET                   |

## Demonstration

https://user-images.githubusercontent.com/68227858/234369733-51a8faa0-9a30-4832-b51f-fa3c1bda99c9.mp4


