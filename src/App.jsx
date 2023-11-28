import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import NotFound from './components/NotFound'
import NavBar from './components/NavBar'
import Work from './components/Work'
import Contact from './components/Contact'
import NoticeAlert from './components/subcomponents/NoticeAlert'

function App() {
  return (
    <BrowserRouter>
      <NoticeAlert />
      <NavBar />
      <Routes>
        <Route index path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
