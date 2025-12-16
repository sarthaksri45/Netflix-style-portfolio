import { useState } from 'react'
import { Routes, Route} from "react-router-dom";
import Intro from './pages/Intro';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Navbar from './components/Navbar';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0)
  
   
  return (
    <>
    <Routes>
      <Route path='/' element={<Intro/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Aboutme' element={<><Navbar/><Aboutme/></>}/>
      <Route path='/Education' element={<><Navbar/><Education/></>}/>
      <Route path='/Projects' element={<><Navbar/><Projects/></>}/>
      <Route path='/Contact' element={<><Navbar/> <Contact/> </>}/>
    </Routes>
   </>
   
  )
}

export default App
