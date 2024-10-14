import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
