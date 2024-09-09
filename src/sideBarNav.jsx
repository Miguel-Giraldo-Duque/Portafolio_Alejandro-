import { useEffect, useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import useIsWideScreen from './narrowScreen'; 

export const SideBarNav = ({open}) => {
    const isWideScreen = useIsWideScreen(); // Por defecto, usa 744px como umbral

  return (
    <li style={{
        display: isWideScreen ? 'flex' : open ? 'flex' : 'none', // Condición combinada
      }}>
        <Link to={"/"}> Home  </Link>
        <Link  to="/Articles"> Articles </Link>
        <button>
            <Link to={"/chat"}> lets talk </Link>
        </button>
            
    </li>
  )
}
