# react-drop-browser

Simple, customizable react drag and drop component. Also comes with a file browser.

Demo URL <https://codesandbox.io/embed/react-drag-drop-browser-demo-6j6rl>

[NPM](https://www.npmjs.com/) package URL: <https://www.npmjs.com/package/react-drop-browser>

Current version: `0.1.0`

## Installation

Installation can be done with `yarn` or `npm`

```cmd
# yarn
yarn add react-drop-browser

# npm
npm install react-drop-browser
```

## Usage

The included example app shows how to use the `DragDropSelect` component to build an array of `.pdf` files using the `useReducer` hook.

## props

|       Prop       |       Default    |     Function     |
| ---------------- | ---------------- | ---------------- |
|`iconStyle` (*optional, object*) | `{ width: '20px', height: '20px' }` | For passing extra styling to the default file upload icon. |
| `IconComponent` (*optional, Component*) | [feathericons](https://feathericons.com/) svg | Use this to pass a file upload icon of your choice. The only requirement is that it must be an `svg` element wrapped up as a `React` component. Default is shown [below](#default-icon). |
| `messageText` (*optional, string*) | *Drag a file here to upload or click here to browse for files.* | Set your preferred display text.|
| `messageTextClass` (*optional, string*) | none | For styling the display text. |
| `allowedFileTypes` (*optional, string*) | none | Specify acceptable file types. |
| `allowMultipleFiles` (*optional, bool*) | `false` | If file browser should accept multiple files |
| `dragDropHandler` (*required, function*) | none | callback that receives an array of files |
| `fileBrowserHandler` (*required, function*) | none | callback that receives an array of files |

The file browser div has a class of `file-browser-zone`
The drag and drop zone has a class of `drag-drop-zone`. When the item is inside the drag and drop zone, an additional class `inside-drag-area` is activated.

### Default icon

```javascript
const FiUpload = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-upload"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  );
};
```

## Credits

1. [Publish a react component as npm module](https://parastudios.de/create-a-react-component-as-npm-module/)
