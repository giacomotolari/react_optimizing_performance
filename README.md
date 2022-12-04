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

By clicking the 'increment' button, we can see that the console.log(title) still appears in the 'Post' component which has as title-props: 'title 1' nostante we use react.memo

## What's going on?

In the componet Post we are passing in the props-obj children as property. Only Post-1 defines/uses in App.jsx what children is.

## Why?

In React if a component updates his states, his childs and it self will be re render.
## Task

children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. These kinds of components are identified by the official documentation as “boxes”.
