# React.Lazy

## what we will learn?

- improve the performances with React.lazy.
- use suspense and fallback.

## What's going on?

We have an App with several routes, when we load the App from the start all the project-files are loaded.
You can look at this by exploring the dev tool (sources).

![loaded files](./src/assets/images/sources.png?raw=true "loaded files")

## Why?

This is normal, as default it works like this.

## Task 1

Fix the problem with React.lazy

## Task 2

Create a loading animation with **_React.Suspense_** that alerts you when components required by **_React.Lazy_** are loading.

## Task 3

In the AboutUs Page there is a CompanyPhoto component, use **_React.Lazy_** to import it only when is needed.

## Task 4

In the Contact page import the component "ContactData" dynamically using dynamic import of javascript (not React.lazy).
