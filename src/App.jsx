import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './Components/Main.jsx';
import './App.css'
import Todo from './Components/Todo/Todo.jsx';
import Counter from './Components/Counter/Counter.jsx';
import Timer from './Components/Timer/Timer.jsx';
function App() {
  const [section, setSection] = useState('Main');
  const [value, setValue] = useState('');

  return (
    <>
    <div className="wrapper">
        <header className="header">
          <div className="container">
              <div className="logo">
                <h1>LOGO</h1>
              </div>
              <nav className="link-menu">
                <ul className="list-link">
                  <li className="link-item"><a onClick={()=>setSection('Main')}>Main</a></li>
                  <li className="link-item"><a onClick={()=>setSection('Todo')}>Todo</a></li>
                  <li className="link-item"><a onClick={()=>setSection('Counter')}>Counter</a></li>
                  <li className="link-item"><a onClick={()=>setSection('Timer')}>Timer</a></li>
                </ul>
              </nav>
          </div>
        </header>
        <main className="main">
          <div className="container">
            {section == 'Main' && <Main />}
            {section == 'Todo' && <Todo/>}
            {section == 'Counter' && <Counter />}
            {section == 'Timer' && <Timer />}
          </div>
        </main>
        <footer className="footer">
          <div className="container">
            <p>copyright©2077</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
