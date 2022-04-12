import React from 'react'

const StickyMenu = () => {
  return (
    <div className='float md:hidden z50'>
      <ul class='menu  menu-horizontal bg-dark rounded-box'>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  )
}

export default StickyMenu
