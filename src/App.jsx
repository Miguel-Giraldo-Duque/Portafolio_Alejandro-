import { useState } from 'react'
import "./styles/App.css"
import { NavBar } from './NavBar.jsx';
import { Link } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <div className='main'>
      <div className='main__animation'>
        <img src="" alt="" />
      </div>


      <div className='conteinerContent'>
        <p>Thinks , cuatum , AI, writings</p>
     
        <div className='conteinerContent__presentation'>
          <div className='presentation__subtitle'>
             <h4>who I am?</h4>
          </div>
          <h1> Im </h1>
          <span>Alejandro</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores iste obcaecati nisi harum, consequuntur illo, blanditiis ex nulla recusandae, quod laboriosam enim eius magni debitis magnam? Eum laboriosam fugiat nulla!
          Lorem ipsum dolor sit amet consectetur
          <br></br>
          <br></br>
          adipisicing elit. Animi accusantium nulla veritatis deleniti velit cumque, adipisci dignissimos ex perferendis, debitis praesentium. Fugit, quas aliquam ut minus doloremque reiciendis dolorem ex?
        </p>
        <li className='conteinerContent__redes'>
          <button><Link>Talk to me</Link></button>
          <div>
            <a href=""> <img src="./email.png" alt="" />  </a>
          </div>
          <div>
            <a href=""> <img src="./github.png" alt="" />  </a>
          </div>
       
          <div>
            <a href=""> <img src="./social.png" alt="" />  </a>
          </div>
       
        </li>
    
      </div>
    </div>
   
    </>
  )
}

export default App
