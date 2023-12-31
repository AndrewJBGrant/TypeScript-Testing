// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import vitestLogo from './assets/vitest.svg'
import typeScriptLogo from './assets/typescript.svg'
import viteLogo from '/vite.svg'
import Demo from "./useRef";
import './App.css'

function App() {
  // const [count, setCount] = useState(2)


function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 2));


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitest.dev/guide/" target="_blank">
          <img src={vitestLogo} className="logo vitest" alt="Vitest logo" />
        </a>
        <a href="https://www.typescriptlang.org/docs/" target="_blank">
          <img src={typeScriptLogo} className="logo typescript" alt="TypeScript logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count * 2)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Demo />
    </>
  )
}

export default App
