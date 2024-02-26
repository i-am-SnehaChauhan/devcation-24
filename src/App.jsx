import './App.css'
import Tracks from './components/Tracks'
import Judges from './components/judges'
import Prizes from './components/Prizes'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
function App() {


  return (
    <>
    <Nav/>
    <Header/>
    <Judges/>
    <Tracks/>
    <Prizes/>
    <Footer/>
    </>
  )
}


export default App
