import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Db } from './provider';
import { Hamburger } from './hamburger';
import { NavBar } from './NavBar';
import ReactMarkdown    from 'react-markdown';


export const Article = () => {
    const { title } = useParams(); // Obtiene el id desde la URL
    const data = useContext(Db)
    let transformTitle = title.split("-").join(" ")
    const[ articleInfo , setInfo] = useState([])
    const [articleContent , setContent] = useState([])
    useEffect(() =>{
      const procced= data.find(e => e.title == transformTitle)
      setContent(procced.contentArticle)
      setInfo(procced)
    },[])
   

    console.log(articleContent)

          
      // const source =  articleContent.replace(/\n/gi, '\n &nbsp;');
          
        
          
    
    return (
    <>
    <NavBar></NavBar>
        <div className='articleMain'>
          <img src="./arrow.png" alt="" />
          <div className='articleMain__info'>
              <h2>{transformTitle}</h2> 
            <div className='info__article'>
              <div className='info__authorImg' />  
              <p> {articleInfo.author} </p>
              <p>{articleInfo.fecha}</p>
            <p>{articleInfo.position}</p>
            </div>
              <button>{articleInfo.readTime}</button>
          </div>

          <div className="articleMain__contentMarkdown">
            <ReactMarkdown
            className={"md"}
            >
              {articleInfo.contentArticle}
            </ReactMarkdown>
          </div>
  
        </div> 
    </>
  )
}


