import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import NotFound from './components/NotFound'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
