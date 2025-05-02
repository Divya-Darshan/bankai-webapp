import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './nav/nav.jsx'
import BG from './bgimg/bg.jsx'
import Cont from './content/cont.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BG/>
    <Cont/>
    <Nav />
  
  </StrictMode>,
   
)
