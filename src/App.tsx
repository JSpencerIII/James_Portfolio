import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ThreeBackground from './components/ThreeBackground'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
        <ThreeBackground />
        <Navbar />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
