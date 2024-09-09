import React, { useState } from 'react'
import { NavBar } from './NavBar'
import useIsWideScreen from './narrowScreen'
export const Chat = () => {
  const isMobile= useIsWideScreen()
  const [openControls, setOpen] = useState(false)
  return (
    <>
     <NavBar></NavBar>

      {
        isMobile ? <div className='mainChat'>
          

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
  
        </div> :
          <>
          <button onClick={()  => setOpen(!openControls)} id='controls' ><img src="./arrow.png" alt="" style={{transform: openControls ? 'rotate(180deg)' : 'rotate(360deg)'}}/></button>
          <div className='mainChat'>
          

          <div className="mainChat__controlsChat" open = {openControls} style={{display: openControls ? "grid": "none"}}>
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
      }

    
     
    </>

  )
}
