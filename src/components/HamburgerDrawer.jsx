import React, {useState} from 'react'
import {Navlinks} from './../utils/AllData'
import {Link} from 'react-router-dom'

const HamburgerDrawer = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-dark transition ease transform duration-300`
  return (
    <div
      className={`${
        isOpen && 'dropdown-open'
      } fixed inset-x-0 bottom-0 z-50 p-5 dropdown dropdown-top md:hidden transitioning`}
    >
      <button
        className='flex flex-col items-center justify-center w-16 h-12 rounded-lg shadow-lg bg-primary-light group'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'rotate-45 translate-y-3  ' : ' group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : ' '}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? '-rotate-45 -translate-y-3' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div
          tabIndex='0'
          className='dropdown-content menu   p-2 shadow-lg bg-white/40  backdrop-blur-lg rounded-box w-[250px] '
        >
          {Navlinks.map((navLink, index) => (
            <li
              onClick={() => {
                setIsOpen(false)
              }}
              key={index}
            >
              <Link to={navLink.link} key={index} className='font-bold nav'>
                {navLink.name}
              </Link>
            </li>
          ))}
        </div>
      )}
    </div>
  )
}

export default HamburgerDrawer
