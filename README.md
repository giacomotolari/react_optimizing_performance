
# React-optimizing-performance

### What is performance in an app?

Performance has to do with how fast or slows your app loads if the app crashes when it reaches a peak in user activity, and how smooth certain features (like payments) work. Think App says: “Performance is a product of multiple factors: the server, mobile device, network, and programming of the app itself.”

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

- improve the performances with React.lazy.

## What's going on?

We have an App with several routes, when we load the App from the start all the project-files are loaded.
You can look at this by exploring the dev tool (sources).

![loaded files](./src/assets/images/sources.png?raw=true "loaded files")

## Why?

This is normal, as default it works like this.

## Task

Fix the problem with React.lazy