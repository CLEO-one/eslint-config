# eslint-config-cleo-one
ESLint config for CLEO.one

### install 
```
npm i eslint-config-cleo-one -D

```

### packeage.json 

```json
{
  "devDependencies": {
    "babel-eslint": "9.0.0",
    "eslint": "^5.16.0",
    "eslint-config-cleo-one": "^1.0.0",
    "eslint-config-prettier": "^4.1.0",
    "eslint-config-react-app": "^3.0.8",
    "eslint-loader": "^2.1.1",
    "eslint-plugin-import": "2.16.0",
    "eslint-plugin-jsx-a11y": "6.2.1",
    "eslint-plugin-react": "7.12.4",
    "eslint-plugin-react-hooks": "^1.6.0"
  }
}
```

### .eslintrc


```eslintrc

{
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
    "cleo-one"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": ["import", "react", "jsx-a11y", "react-hooks"],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    },
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "detect"
    },
    "propWrapperFunctions": [
      "forbidExtraProps",
      {
        "property": "freeze",
        "object": "Object"
      },
      {
        "property": "myFavoriteWrapper"
      }
    ]
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
      "modules": true
    }
  }
}

```
