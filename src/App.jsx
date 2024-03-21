import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Event from './pages/EventPage'
import Team from './pages/TeamPage'
import './App.css'
import { Analytics } from "@vercel/analytics/react"


function App() {


  return (
    <Router>
      <Analytics/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </Router>
  )
}


export default App
