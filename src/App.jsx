import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <> 
      <NavBar /> 
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
