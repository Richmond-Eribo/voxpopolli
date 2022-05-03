import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import {Navlinks} from './../utils/AllData'
import Modal from './Modal'

function Nav() {
  return (
    <div className='flex items-center justify-between h-36 '>
      <Link to='/'>
        <div className='flex items-center'>
          <img src={logo} height={40} width={50} alt='logo' />
          <p className='hidden mx-1 text-lg font-bold text md:block text-dark '>
            Voxpopuli
          </p>
        </div>
      </Link>

      <div className='hidden md:flex text '>
        {Navlinks.map(navLink => (
          <Link to={navLink.link} key={navLink.name} className='nav'>
            <p>{navLink.name}</p>
          </Link>
        ))}
      </div>

      <Modal />
    </div>
  )
}

export default Nav

// for the nav, there will be the logo, Home, blog, donate, Aspirants(dropdown),
