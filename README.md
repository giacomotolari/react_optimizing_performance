# React-optimizing-performance

### What is performance in an app?

Performance has to do with how fast or slows your app loads if the app crashes when it reaches a peak in user activity, and how smooth certain features (like payments) work. Think App says: “Performance is a product of multiple factors: the server, mobile device, network, and programming of the app itself.”
### How important is app performance?

Most (70%) of mobile app users will abandon an app if it takes too long to load. A one-second delay in response can result in a 7% loss in conversion, and nearly one in every two apps are uninstalled within the first month of download.

## How improve performance in React?

There are many factors https://www.codementor.io/blog/react-optimization-5wiwjnf9hj, among the most important we have:

-  Use React.Fragments to Avoid Additional HTML Element Wrappers
-  Avoid using Index as Key for map
-  Optimizing the components with React Memo
-  Optimizing the logic in our components with useCallback and useMemo
-  Use lazy load component
-  Use lazy load image
-  Load Component when is in the viewport 
https://stackoverflow.com/questions/53757229/reactjs-how-to-render-a-component-only-when-scroll-down-and-reach-it-on-the-page
-  Delete unused code and imports

## what we will learn?

-  Optimizing the components with React.Memo ***(branches: memo-problem, memo-solution)***
-  Decrease uploaded files whit React.Lazy ***(branches: lazy-load-component-problem, lazy-load-component-solution)***
-  Optimizing the logic in our components with React.useCallback and React.useMemo  ***(branches: useCallback-problem and useMemo-solution)***
-  Avoid repeated code using props.children  ***(branches: children-problem and children-solution)***
<!-- -  Avoid "index" as key during an iteration whit map code using an unique id  ***(branches: key-index-problem and key-index-solution)*** -->


"The reason why you should not use the index as the key in a map iteration in React is that it could cause issues with component reconciliation.

When rendering a list of items in React, React keeps track of the items based on their key. This allows React to optimize performance by only making necessary changes when the list is modified. When you use the index as the key, you lose this optimization because React doesn't know which item has been modified.

For example, if you have a list of items and you use the index as the key, when you remove an item from the beginning or middle of the list, all subsequent indices will be shifted up, and React will have to re-render all subsequent items even if they haven't been modified. This can have a significant performance impact, especially for long lists.

Instead, it's better to use a unique and stable key for each item in the list. For example, if you have a list of objects with a unique ID, you can use this ID as the key. This way, when you remove an item from the list, React knows which item has been removed and can avoid re-rendering all subsequent items.

In general, it's good practice to use a unique and stable key for each item in the list to ensure the best possible performance and proper component reconciliation in React."