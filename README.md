# React.memo with props.children

## what's going on?

By clicking the 'increment' button, we can see that the console.log(title) still appears in the 'Post' component which has as title-props: 'title 1' nostante we use react.memo

## why?

In the componet Post we are passing in the props-obj children as property. Only Post-1 defines/uses in App.jsx what children is.

React.memo won't work if the component uses "children" because App.jsx once we change the value of the state "counter" will re-render the whole componet so also children (the HTML elements we pass)

## what is children?

children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. These kinds of components are identified by the official documentation as “boxes”.
