#Project Name & Pitch

CoinTrader

CoinTrader is an application that allows you to Create & Buy Tokens(coins),
its built with React, JavaScript, Express, and MongoDB.

#Project Status

This project is currently in development. Users can Register & Login (with JWT Authentication).
Users can Create (and Filter & Search) for the required tokens.
Google Login API is near Completion.

# To - Dos

## Functional:

Search:

- [x] Search filters for categories // typeError: Converting circular structure to JSON

//chec navbar.jsx line 14 what is the res value

// add an emviromental file for the frontend

- [x] give message on wrong password
- [x] check email (correct email regex)
- [x] Protected Route
- [x] Passwords hashing & salting
- [x] JWT Session Token
  - [x] Logout

New Points

- [ ] Fix Google Login
- [ ] Add Apple Login
- [ ] Add User Profile Showing every thing
- [x] Add Errors to Register and to go to login immediatly after successfull Register
- [ ] Allow User to Buy using a Balance(Wallet)
- [ ] Allow User to Sell to add to his Balance(Wallet)
- [ ] Deploy Website
- [ ] Add Stripe (Payment)

Google:

- [ ] Google Signin API //No error given but still not working

Tokens:

- [x] Create token with query parameters
  - [x] Check first if user exists

## Small touches

- [x] front-end directory & structure
- [x] landing home page
- [x] existing user error handling on register //Done but check the if its correct
- [x] mainpage in navbar (cant understand this one?)

## Non functional but important

Cleanup:

- [x] Adjust messages
- [x] Remove exccessive comments
- [ ] No files bigger than 120 lines of code
- [ ] Setup ESLint & Webpack //before last step
- [ ] Write 5 unit tests for 5 components (using Jest) //before last step
- [ ] Remove excess code (such as views)
- [x] use Express router correctly Or app.get (split into different files)
- [x] All arrow functions (ES6 sytnax)
- [ ] Error handling & HTTP error status codes for all endpoints
- [x] Look into Swagger / endpoint documentation creation

Deployment: last steps

- [ ] AWS (if no card required)
  - [ ] Microsoft Azure
- [ ] Deploy Backend
- [ ] Deploy Frontend
- [ ] Environment variables

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
