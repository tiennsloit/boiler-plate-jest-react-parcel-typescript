# Getting Started with Parcel

This project was bootstrapped with Parcel bundler + Tailwindcss

## Available Scripts

In the project directory, you can run:

### `yarn start`

## This project use Tailwind CLI to build css (not PostCSS):
```
npx tailwindcss -i ./src/assets/scss/style.scss -o ./src/assets/css/built/style.css --watch
```

##### You can read more how to setup Tailwindcss with ReactJS here
##### `https://tailwindcss.com/docs/installation`

##### There is an issue if following the instruction above that the -o should be a location in /src otherwise Parcel will trigger error with link to outout css in index.html

#### use:
```
<link rel="stylesheet" href="/assets/css/built/style.css" />
```

### instead of:
```
<link rel="stylesheet" href="dist/style.css" />
```