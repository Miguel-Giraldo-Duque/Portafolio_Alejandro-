import React, { act } from 'react'
import { NavBar } from './NavBar'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef ,useContext} from 'react'
import { Db, RequierdTags } from './provider';
import { v4 as uuidv4  } from 'uuid'



export const ArticlesHome = () => {
    const [currentIndex , setIndex] = useState(3)
    const listNodes = useRef()
    const filtering = useRef(null)   
    const data = useContext(Db)
    const requierdTags = useContext(RequierdTags)
    const [arrayCards , setCards] = useState(data)
    const [q, setQ] = useState("");
    const selectedFilter = useRef() 
    const [filtered, setFiltered] = useState(data);
    const [filteredArticles, setFilteredArticles] = useState(data);


    
    console.log(data)

    useEffect(() =>{
        const list = listNodes.current
    
        const cardsList = list.querySelectorAll(".carousel__item")
     
        let active =  Math.floor(cardsList.length/2)

       if (currentIndex === null) {
            setIndex(active);
        }
        
        cardsList[currentIndex].style.transform = `none`;
        cardsList[currentIndex].style.zIndex = 1;
        cardsList[currentIndex].style.filter = 'none';
        cardsList[currentIndex].style.opacity = 1;

        cardsList.forEach((item) => {
            item.style.transform = '';
            item.style.zIndex = '';
            item.style.filter = '';
            item.style.opacity = '';
        });
    
        let stt = 0;
        for (let i = currentIndex + 1; i < cardsList.length; i++) {
            stt++;
            cardsList[i].style.transform = `translateX(${150*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(0.5deg)`;
            cardsList[i].style.zIndex = -stt;
            cardsList[i].style.filter = 'blur(1px)';
            cardsList[i].style.opacity = stt > 2 ? 0 : 0.6;
        }

        stt = 0
        // show after
        for (let i = currentIndex - 1; i >= 0; i--) {
            stt++;
            cardsList[i].style.transform = `translateX(${-150*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            cardsList[i].style.zIndex = -stt;
            cardsList[i].style.filter = 'blur(1px)';
            cardsList[i].style.opacity = stt > 2 ? 0 : 0.6;
        }

    }, [currentIndex])

    const scrollToCard = (direction) => {
             setIndex((prevIndex) => {
            if (direction === "prev") {
                return prevIndex === 0 ? 0 : prevIndex - 1;
            } else {
                return prevIndex === data.length - 1 ? prevIndex : prevIndex + 1;
            }
        });

    };
    const [searchParam] = useState(["title"])
    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }


    useEffect(() =>{
        const experiment = search(data).map((e) => e )
        setFilteredArticles(experiment)
    },[q])



    const filterBytag = (event) =>{
         
        // Identifico nombre tag
        const e = event.currentTarget;

        const tag = e.querySelector('p').textContent;
        const parent = e.parentElement.className

        if (parent == "serach__filters") {
            if (filtering.current ===  tag) {
                setFilteredArticles(arrayCards)

            } else {
                const filtered = arrayCards.filter(item => item.tags.includes(tag));
                filtering.current = tag
                setFilteredArticles(filtered)
            }
        } else{
            if (filtering.current ===  tag) {
                setFiltered(arrayCards)
                filtering.current = null
                setIndex(0)
            } else {
                const filtered = arrayCards.filter(item => item.tags.includes(tag));
                if (filtered.length > 2) {
                    setIndex(0)
                }
                filtering.current = tag
                setFiltered(filtered)
            }
        }
    }      

    
  return (
    <>
    <NavBar></NavBar>
    <div className='mainArticles'>
        <h2>Latest articles</h2>
        <div className="carousel__filters">
                {
                    requierdTags.map((tag) =>{
                        return(
                            <div className='tag' key={uuidv4()} onClick={filterBytag}>
                                <p >{tag}</p>
                            </div>
                        )
                    })
                }

              

                <div className="carousel__leftArrow"onClick={() => scrollToCard("prev")} >Prev</div>
                <div className="carousel__leftArrow" onClick={() => scrollToCard()}>Next</div>
        </div>
        <div className='mainArticles__carousel' ref={listNodes}>
            {
               filtered.map((item) => {
                return (
                    <div className='carousel__item' key={item.id}>
                        <div className='item__img'>
                        </div>
                        <div className='tag'>
                           {
                            item.tags.map((e)=>{
                               return(<p key={uuidv4() }>{e}</p>)
                            })
                            
                            }
                            
                        
                        </div>
                        <div className="item__content">
                            <h3>{item.title}</h3>
                            <p>{item.fecha}</p><span>{item.readTime} lecture</span>
                            <button><Link to="#">Read more</Link></button>
                        </div>
                    </div>
                );
            })
            }
        </div>



        <div className="mainArticles__serach">
            <h3>My content</h3>
            <input type="search" placeholder='serach for title'   value={q} onChange={(e) => setQ(e.target.value)}/>

            <div className="serach__filters" ref={selectedFilter}>
                {
                requierdTags.map((tag) =>{
                        return(
                            <div className='tag' key={uuidv4()} onClick={filterBytag} >
                                <p>{tag}</p>
                            </div>
                            )
                    })
                }
            </div>



        
            <div className="mainArticles__article">
                {
                     filteredArticles.map((item) => {
                        let urlTitle = item.title.split(" ").join("-")
                        
                        return (
                            <div className='article__item' key={uuidv4()}>
                                <div className='item__img'>
                                </div>
                                <div className='tag'>
                                    {
                                        item.tags.map((e)=>{
                                            return(<p key={uuidv4()}>{e}</p>)
                                        })
                                    
                                    }
                                </div>
                                <div className="item__content">
                                    <h3>{item.title}</h3>
                                    <p>{item.fecha}</p><span>{item.readTime} lecture</span>
                                </div>

                                <p>
                                    {item.briefDescription}
                                </p>
                                <button><Link to={`/article/${urlTitle}`}>Read more</Link></button>
                            </div>
                        );
                    })    
                }
            </div>
        </div>
    </div>
    </>
  )
}
