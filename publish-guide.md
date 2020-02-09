1. Add sections to `package.json`

```json
  "main": "dist/distribution.js",
 "files": [
    "dist/*"
  ],
```

1. Create file `distribution.js`
1. `yarn add @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-plugin-transform-react-remove-prop-types --dev`
