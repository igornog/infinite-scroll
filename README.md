# Infinite Pagination Problem

There's this legacy API that contains info gathered across decades of existence. Your team needs to use one of the endpoints of that API to build a new web app.

This specific endpoint returns millions of items, paginated at 100 per page.

You job is to build a web app with a single page that lists all the items available in this legacy API in an infinite scrolling page. Whenever the user clicks in one of the items, the item becomes greyed out. This should persist even after refreshing the page.

## Here's what you need to know:

The legacy API is at http://sf-legacy-api.now.sh
A simple GET /items will return the first 100 items.
To go to a specific page you use GET /items?page=20 for instance.
The response will contain info about the total number of items, and the link to the next page.
Guidelines

## Here's the important stuff that we take into account when reviewing this exercise:

It should be simple to start your solution
It should contain some setup instructions
It should work correctly (this also means no performance issues)
It should look good
It should be accomplished without the help of 3rd party libraries (except for React, styling libraries or testing libraries)
It should have an automated way to prove it's working correctly
It should use React
It should be considered production ready.
Delivery
You will be given access to a github repository to work on your exercise. To submit your solution, open a pull request against the master branch. Use the body of the pull request to briefly describe your solution, what might be incomplete and why, etc. In case of any doubts please open an issue in the repository. We'll try to answer it as fast as possible.

Important
We will not consider submissions that either don't work when following provided instructions or that were pushed directly to master (you need to open a pull request and leave it open).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
