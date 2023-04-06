# Props Exercise - Blog Page - Props.Children - whit map.

## what's going on?

We have a data.json file containing an array of posts.
We want to use this array to create an iteration and display render each post component that takes data from each object.


## Task

The problem is that we want each Post component to contain different props.children or none at all.


## Solution 

In this case, it is not recommended to use props.children, it is better to have components that return the same HTML structure, but if you still want to proceed along these lines, the best thing to do is to differentiate within the "map" function the objects in the array (e.g. with an id) and define how each individual component is to be rendered.
