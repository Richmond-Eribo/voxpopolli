import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Elections from './pages/Elections'
import Candidates from './pages/Candidates'
import Candidate from './pages/Candidate'
import {Hamburger} from './components'
import SingleBlog from './pages/SingleBlog'
import {Helmet} from 'react-helmet'

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Voxpopuli Nigeria</title>
        <meta
          og:name='description'
          k
          content='Positively impacting voting decisions of the people by presenting
      the public with hard facts about presidential aspirants'
        />
        <link rel='canonical' href='https://voxpopuli-nig.com' />
        <meta property='og:title' />
        <meta property='og:image' key='og_image' content='./assets/logo.png' />
      </Helmet>

      <Hamburger />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Candidates' element={<Candidates />} />
        <Route path='/Candidates/:id' element={<Candidate />} />

        <Route path='/Blog' element={<Blog />} />
        <Route path='/Blog/:id' element={<SingleBlog />} />

        <Route path='/Elections' element={<Elections />} />
      </Routes>
    </Router>
  )
}

export default App
