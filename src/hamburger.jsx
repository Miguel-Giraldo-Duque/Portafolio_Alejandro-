import React, { useState } from 'react'
import { SideBarNav } from './sideBarNav'

export const Hamburger = () => {
    const [open , setOpen] = useState(false)

  return (
    <>
    <div id='hamburger' open={open}  onClick={() => setOpen(!open)}  >
        <img src="./hamburger.png" alt="Hambuger" />
    </div>
    <SideBarNav open = {open}></SideBarNav>
    </>
  )
}
