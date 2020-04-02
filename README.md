# react-canvas-dom
Canvas component and hooks for reactjs

## Usage
Install it with npm or yarn

npm: `npm i react-canvas-dom`

yarn: `yarn add react-canvas-dom`

Import the component and use it:
```jsx
Import Canvas from 'react-canvas-dom'

const draw = (ctx, i) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(50, 50, 20 * Math.sin(i * 0.05) ** 2, 0, 2 * Math.PI * Math.sin(i * 0.05) ** 2);
  ctx.fill();
}

const App = () => <Canvas draw={draw} />

export default App
```
