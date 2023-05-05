# Testing ReactJS project with Jest and React Testing Library
This project is a boilerplate setup with Parcel + Jest + React Testing Library

## Enzyme and React 18
The stark reality: Enzyme is not compatible with React 18, and probably never will be.

In June 2020, [Enzyme switched from being maintained by Airbnb to being maintained by an individual. ](https://medium.com/airbnb-engineering/phase-ii-enzyme-d9efa717e297)

## Suggestion: not use Enzyme but React Testing Library
Why I currently recommend React Testing Library: 

React Testing Library and Enzyme are both testing libraries for React applications that allow you to render components in a test environment, so that you can test them using Jest. However, there are some differences between the two libraries that might make you choose one over the other.

1. React Testing Library is designed to be more lightweight and less reliant on React's internal implementation details. This means that React Testing Library is less likely to have issues with new versions of React, and it doesn't require an adapter to be updated for each new release of React.

2. It is designed to encourage testing your components in a way that closely matches how they are used by end users. React Testing Library focuses on testing the behavior of your components, rather than their implementation details, which can make your tests more robust and easier to maintain over time.

That being said, Enzyme has its own strengths and use cases as well, such as providing more powerful and flexible APIs for testing components in certain scenarios. Ultimately, the choice between React Testing Library and Enzyme depends on the specific needs and goals of your testing strategy.

# Set up

## install libraries for jest and react testing library

```
yarn add -D jest @types/jest @testing-library/react @testing-library/react-hooks @testing-library/jest-dom @testing-library/user-event
```

## Install babel preset to use jest with typescript
Install the package
```
yarn add -D @babel/preset-typescript
```

add this config to babel.config.js
```
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```
However, there are some caveats when using typescript with babel. Because Typescript support in Babel is purely transpilation, Jest will not type-check your tests as they are run. If you want that, you can use ts-jest instead, or just run the Typescript compiler tsc separately

## Install jest and ts-jest

### install the package
```
yarn add -D ts-jest
```

### config the jest config file
create jest.config.js file with: 
```
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    silent: true,
};
```
or run 
```
yarn ts-jest config:init
```
and replace `testEnvironment: 'jsdom'` with `testEnvironment: 'node'`

# Run Tests
```
yarn jest
```
or
```
npm run jest
```
## Known issue:
if you get any error message when test with screen.getByText():
```
The error below may be caused by using the wrong test environment, see https://jestjs.io/doc/configuration#testenvironment-string. Consider using the "jsdom" test environment
```
make sure you have import the below line of code to your test file:
```
import '@testing-library/jest-dom/extend-expect';
```

### This project give some example tests with reducer, redux, setTimeout, renderHook (for custom hook), Mock service worker [mswjs.io](https://www.mswjs.io) requests on the network level