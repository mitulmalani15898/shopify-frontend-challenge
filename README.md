# Shopify Frontend Developer Intern - Fall 2022 Challenge

This is the group project repository for the Shopify Frontend Developer Intern - Fall 2022 Challenge.

- _Date Created_: 12 MAY 2022
- _Last Modification Date_: 22 MAY 2022
- _Deployed Application URL_: <https://shopify-frontend-intern.herokuapp.com/>
- _Git Repository URL_: <https://github.com/mitulmalani15898/shopify-frontend-challenge>

## Authors

- [Mitul Pravinbhai Malani](mailto:mt215690@dal.ca) - _(Maintainer)_

## Getting Started

See the following section for detailed step-by-step instructions on how to run this project locally and See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this tutorial up and running on your local machine, you will first need to install the following software

- [Node.js](https://nodejs.org/en/) - a JavaScript runtime (includes npm)
- [npm](https://docs.npmjs.com/about-npm) - a package manager for Node environment

### Installing

To get a development env running on local machine, run the following command in the project directory

Below command installs all the packages provided in package.json file into the folder called node_modules at the root of the project directory. You can see node_modules folder created at the root of the project directory when installation gets successful.

```
npm install
```

Below command runs the project in development mode. You can visit [http://localhost:3000](http://localhost:3000) to view it in your browser.

```
npm start
```

Below command lints the js and css files of the project.

```
npm run lint
```

## Deployment

To deploy this project on heroku, Heroku CLI can be used.

Below command installs heroku globally into system.

```
npm install -g heroku
```

Use below command to login to your heroku account

```
heroku login
```

Below command creates a heroku app named heroku_app_name

```
heroku create <heroku_app_name>
```

Below command deploys main branch of project onto the heroku

```
git push heroku main
```

## Built With

- [React](https://reactjs.org/docs/getting-started.html) - A JS library for building UIs
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [Redux thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for redux
- [React redux](https://react-redux.js.org/) - Official React bindings for Redux

## Acknowledgments

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
