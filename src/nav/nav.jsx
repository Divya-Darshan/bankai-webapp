import './nav.css'
import { useState } from 'react'

function App() {
  const [isPressed, setIsPressed] = useState(false)

  const handleToggle = () => {
    setIsPressed(prev => !prev)
  }

  return (
    <>
      <div className='nav'>
        <nav>
          <a href='index.html' className="logo">Bankai Animation Tamil</a>
          <ul className={isPressed ? 'active' : ''}>
            <li><a href="index.html">Home</a></li>
            <li><a href="vid.html">Videos</a></li>
            <li><a href="#about">AboutMe</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <button
            id='ham'
            className={isPressed ? 'pressed' : ''}
            onClick={handleToggle}
          >
            •••
          </button>
        </nav>
      </div>
    </>
  )
}

export default App
