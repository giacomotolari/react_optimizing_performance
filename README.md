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

- Optimizing the components with React Memo (branches: memo-problem, memo-solution)
- Optimizing the functions components with useCallback and useMemo (branches: useCallback-problem and useMemo-solution)

## What's going on?

Why have a Blog-Page with three different posts, each post is a Post with different props-values.
Each Post component has a console.log that print the props-title.
If the console.log will prints in the browser-console that means that the component re render.
If you click the **mode button_** end look the console in the browser, you can see that each **_Post component_** and the **_App component_** re render every time.

## Why?

In React if a component updates his states, his childs and it self will be re render.
## Task

Solve the problem!
You would click the button and don't see the console.log(title) in each Post component.
