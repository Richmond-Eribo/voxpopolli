import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Aspirants from './pages/Aspirants'
import Blog from './pages/Blog'
import Elections from './pages/Elections'
import Aspirant from './pages/Aspirant'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Aspirants' element={<Aspirants />} />

        <Route path='/Aspirants/:id' element={<Aspirant />} />

        <Route path='/Blog' element={<Blog />} />

        <Route path='/Elections' element={<Elections />} />
      </Routes>
    </Router>
  )
}

export default App
