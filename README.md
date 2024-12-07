# React Router v6 useParams Issue in Conditional Rendering

This repository demonstrates a common problem encountered when using the `useParams` hook in React Router v6 within a conditionally rendered component.  The `useParams` hook might return `undefined` if the component isn't immediately rendered on initial mount, resulting in runtime errors.

The `ConditionalParamsBug.js` file illustrates the problematic code. The `ConditionalParamsSolution.js` file presents a robust solution to mitigate this issue.

## Problem
The `useParams` hook is used within a component that is rendered conditionally.  If the condition initially evaluates to `false`, `useParams` might return `undefined`. When attempting to access param properties later (`params.id`, for example), this will throw an error. 

## Solution
The solution involves checking if `useParams` returned a value before accessing its properties.  We can employ optional chaining or nullish coalescing to handle potential `undefined` values gracefully.