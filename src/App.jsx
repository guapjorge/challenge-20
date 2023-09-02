import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Resume from './components/pages/Resume'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'



function App() {
  const [count, setCount] = useState(0)

  return (
    < Router>
      
      <Nav/>
      <Routes>
        <Route path= { "/"} element= {<Resume/>}/>
        <Route path= { "/about"} element= {<About/>}/>
        <Route path= { "/contact"} element= {<Contact/>}/>
        <Route path= { "/projects"} element= {<Projects/>}/>
      </Routes>
    </Router>
  )
}

export default App
