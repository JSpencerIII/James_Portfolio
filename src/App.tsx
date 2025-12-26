import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ThreeBackground from './components/ThreeBackground'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
        <ThreeBackground />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
