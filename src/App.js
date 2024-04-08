import "./App.css"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Testimonial from "./components/home/testimonial/Testimonial"
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer"


const App = () => {
  return (
    <>
      <Router>
      <Header />
          <Routes>
              <Route path='/' element={<Home />} />          
              <Route path='/about' element={<About />} />          
              <Route path='/testimonial' element={<Testimonial />} />          
              <Route path='/services' element={<Services/>} />          
              <Route path='/contact' element={<Contact/>} />          
          </Routes> 
          <Footer />
      </Router>
    </>
  )
}

export default App