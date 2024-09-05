import React from 'react'
import { NavBar } from './NavBar'

export const Chat = () => {
  return (
    <>
     <NavBar></NavBar>
     <div className='mainChat'>
       
       <div className="mainChat__controlsChat">
        <h3>AI Alejandro</h3>
        <p>Record the talk?</p>
         <div className='controlsChat__options'>
           <button>Yes</button>
           <button>No</button>
           <button>Download</button>
         </div>
       </div>
       <div className="mainChat__animation">
        <button>Talk</button>
        <p>This conversation is not saved</p>
        <p>Terms and conditions</p>
       </div>
 
   </div>
    </>

  )
}
