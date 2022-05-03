import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Elections from './pages/Elections'
import Candidates from './pages/Candidates'
import Candidate from './pages/Candidate'
import {Footer, Hamburger} from './components'

function App() {
  return (
    <Router>
      <Hamburger />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Candidates' element={<Candidates />} />

        <Route path='/Candidates/:id' element={<Candidate />} />

        <Route path='/Blog' element={<Blog />} />

        <Route path='/Elections' element={<Elections />} />
      </Routes>
    </Router>
  )
}

export default App
