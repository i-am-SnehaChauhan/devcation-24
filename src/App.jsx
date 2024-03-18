import './App.css'
import Tracks from './components/Tracks'
import Judges from './components/judges'
import Prizes from './components/Prizes'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Sponsors from './components/Sponsors';
import AboutUS from './components/AboutUS'

function App() {


  return (
    <>
    <Nav/>
    <Header/>
    <AboutUS/>
    <Judges/>
    <Tracks/>
    <Prizes/>
    <Sponsors/>
    <Footer/>
    
    </>
  )
}


export default App
