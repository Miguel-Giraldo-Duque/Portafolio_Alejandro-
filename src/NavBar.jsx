import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='contenierNav'>
        <div className='contenierNav__logo'>
          <Link> Qnow </Link>
        </div>
     <li>
        <Link to={"/"}> Home  </Link>
        <Link  to="/Articles"> Articles </Link>
        <button>
            <Link to={"/chat"}> lets talk </Link>
        </button>
            
        </li>
    </div>
  )
}
