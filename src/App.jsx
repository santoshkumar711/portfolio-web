import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Photo from './Components/Photo'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import About from './Components/About'
import Project from './Components/Project'
import Certificates from './Components/Certificates'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Photo />
              <Skills />
              <Footer/>
            </>
          } 
        />

        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificates" element={<Certificates/>} />

      </Routes>
    </Router>
  )
}

export default App
