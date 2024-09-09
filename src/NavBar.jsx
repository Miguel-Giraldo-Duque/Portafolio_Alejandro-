import React from 'react'
import { Link } from 'react-router-dom'

import { Hamburger } from './hamburger'

export const NavBar = () => {
  return (
    <div className='contenierNav'>
        <div className='contenierNav__logo'>
          <Link> Qnow </Link>
        </div>
      <Hamburger/>
    </div>
  )
}
