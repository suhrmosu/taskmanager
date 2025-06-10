import { useState } from 'react'
import reactLogo from './assets/react.svg'
import amplifyLogo from './assets/Amplify.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { generateClient } from "aws-amplify/data";

function App() {
  /**
  * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
  */
  const client = generateClient(); // use this Data client for CRUDL requests
  const fetchTodos = async () => {
    const { data: todos } = await client.models.Todo.list();
    return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
  };

  const [count, setCount] = useState(1)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://aws.amazon.com/amplify/" target="_blank">
          <img src={amplifyLogo} className="logo amplify" alt="Amplify logo" />
        </a>
      </div>
      <h1>Vite + React + Amplify</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hi <code>Employer</code> count me in!
        </p>
      </div>
      <ul>{fetchTodos}</ul>
      <p className="read-the-docs">
        Click on the Vite and React and Amplify logos to learn more
      </p>
    </>
  )
}

export default App
