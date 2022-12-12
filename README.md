<<<<<<< HEAD
<<<<<<< HEAD
# Getting Started with Create React App
=======
# Props Exercise - Blog Page
>>>>>>> 9809604 (create children-problem)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<<<<<<< HEAD
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
=======
In App.jsx we have three "<section>", each section is a post.
You can see that each section contain almost the same HTMl.
=======
# React-optimizing-performance

### What is performance in an app?

Performance has to do with how fast or slows your app loads if the app crashes when it reaches a peak in user activity, and how smooth certain features (like payments) work. Think App says: “Performance is a product of multiple factors: the server, mobile device, network, and programming of the app itself.”
>>>>>>> af5cb6d (update branch)

### How important is app performance?

Most (70%) of mobile app users will abandon an app if it takes too long to load. A one-second delay in response can result in a 7% loss in conversion, and nearly one in every two apps are uninstalled within the first month of download.

## How improve performance in React?

There are many factors https://www.codementor.io/blog/react-optimization-5wiwjnf9hj, among the most important we have:

- Use React.Fragments to Avoid Additional HTML Element Wrappers
- Avoid using Index as Key for map
- Optimizing the components with React Memo
- Optimizing the functions components with useCallback and useMemo
- Use lazy load component
- Use lazy load image
- Delete unused code and imports

## what we will learn?

- Optimizing the components with React Memo (branches: memo-problem, memo-solution)
- Optimizing the functions components with useCallback and useMemo (branches: useCallback-problem and useMemo-solution)

## What's going on?

Why have a Blog-Page with three different posts, each post is a Post with different props-values.
Each Post component has a console.log that print the props-title.
If the console.log will print in the browser-console that's mind that the component re-renderd.
If you click the **_increment button_** end look the console in the browser, you can see that each **_Post component_** and the **_App component_** re-render every time.

## Why?

In React if a component update his states, his childs and it self will be re-rendered.
## Task

<<<<<<< HEAD
Split the code in App.jsx and create **_only_** a single **_Post_** component.
This component can contain different HTML.

In App.jsx we can return only 3 Post components and the "<div className="App">" container and "<h1>The Bad Blog</h1>".
Find the best way to do that.
>>>>>>> 9809604 (create children-problem)
=======
Solve the problem!
You would click the increment button and don't see the console.log(title) in each Post component.
>>>>>>> af5cb6d (update branch)
