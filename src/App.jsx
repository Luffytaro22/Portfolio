import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import NotFound from './components/NotFound'
import NavBar from './components/NavBar'
import Work from './components/Work'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
