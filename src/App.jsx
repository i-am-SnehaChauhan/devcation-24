import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Event from './pages/EventPage'
import Team from './pages/TeamPage'
import './App.css'


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </Router>
  )
}


export default App
