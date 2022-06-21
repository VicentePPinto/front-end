# front-end
## Use VueRouter
```
into the terminal post create project App
add vue router
Use history mode for router? Y 
```

## Install Tailwind.css
```
npm run serve

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

into the tailwind.config.js file set:
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Create index.css file and put @tailwind directives for each of Tailwind’s layers.

/src/assets/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

Set path index.css in main.js. 
/src/main.js
import './assets/css/index.css'

```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
