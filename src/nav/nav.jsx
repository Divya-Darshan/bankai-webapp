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
            <li><a href="">Home</a></li>
            <li><a href="">Videos</a></li>
            <li><a href="">AboutMe</a></li>
            <li><a href="">Contact</a></li>
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
