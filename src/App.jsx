import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import reactLogo from './assets/react.svg'
import amplifyLogo from './assets/Amplify.svg'
import viteLogo from '/vite.svg'
import './App.css'

import StackPage from './pages/StackPage';
import TasksPage from './pages/Tasks'; // beta


import { generateClient } from "aws-amplify/data";

function App() {
  /**
  * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
  */
  const client = generateClient(); // use this Data client for CRUDL requests
  // const fetchTodos = async () => {
  //   const { data: todos, errors } = await client.models.Todo.list({
  //     authMode: 'oidc',
  //   });
  //   if (errors) {
  //     console.log(errors);
  //   }
  //   return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
  // };

  const [count, setCount] = useState(1)
  // const [todos, setTodos] = useState([])

  // time
  let year = new Date().getFullYear();

  return (
    <>
      <BrowserRouter>
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

        <p className="read-the-docs">
          Click on the Vite and React and Amplify logos to learn more
        </p>

        <Navigation />
        <main>
          <section>
            <Routes>
              <Route path="/" element={<StackPage/>} />
              <Route path="/tasks" element={<TasksPage client={client}/>} />
            </Routes>
          </section>
        </main>
      
        <footer>
            <p>
              {year}  <a href='mailto:m.t.suhr@proton.me'>Malcolm Suhr</a> 
              {/* &copy; {year} */}
            </p>
          </footer>
      </BrowserRouter>
    </>
  )
}

export default App
