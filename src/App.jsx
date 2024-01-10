import './App.css'
import React, {useRef, useState, useEffect} from 'react'
import { gsap } from 'gsap'

//imports all images
import p1large from './assets/larges/p1large.png'
import p2large from './assets/larges/p2large.png'
import p3large from './assets/larges/p3large.png'
import p4large from './assets/larges/p4large.png'

import p1small from './assets/smalls/p1small.png'
import p2small from './assets/smalls/p2small.png'
import p3small from './assets/smalls/p3small.png'
import p4small from './assets/smalls/p4small.png'


function App() {

  const p1largeRef = useRef(null)
  const p2largeRef = useRef(null)
  const p3largeRef = useRef(null)
  const p4largeRef = useRef(null)

  const [activeCardId, setActiveCardId] = useState("1")
  const [prevActiveCardId, setPrevActiveCardId] = useState(null)


  // la card est cliqué, 
  // la ref de la card est envoyée à la fonction passée en paramètre qui retourne l'id à
  // la fonction qui associe l'id de la card à l'image large associée (l'image est retournée par la fonction)
  // une autre fonction se charge de l'animation de l'image large sélectionnée

  function getCardId(idCard) {
    setPrevActiveCardId((prev) => {
      var prev = activeCardId
      if (prev !== idCard) {
        setActiveCardId(idCard);
        // console.log(`card ${idCard} active\ncard ${prev} is not more active`);
      }
      return prev;
    });
  }

  

  useEffect(() => {
    const p1largeElement = p1largeRef.current;
    const p2largeElement = p2largeRef.current;
    const p3largeElement = p3largeRef.current;
    const p4largeElement = p4largeRef.current;

    var distLeft;

    console.log(screen.width)

    if(screen.width  >= 1600){
      distLeft = screen.width*0.748;
    }else{
      distLeft = screen.width*0.786;
    }
  
    const distRight = 0;
    const opDown = 0;
    const opUp = 1;
    const rotation = 180;

    // console.log(`active : ${activeCardId}, unactived : ${prevActiveCardId}`)
  
    if (prevActiveCardId) {
      const prevTimeline = gsap.timeline();
      switch (prevActiveCardId) {
        case "1":
          prevTimeline.to(p1largeElement, { x: distRight, rotate:rotation, duration: 1, opacity: opDown });
          break;
        case "2":
          prevTimeline.to(p2largeElement, { x: distRight, rotate:rotation, duration: 1, opacity: opDown });
          break;
        case "3":
          prevTimeline.to(p3largeElement, { x: distRight, rotate:rotation, duration: 1, opacity: opDown });
          break;
        case "4":
          prevTimeline.to(p4largeElement, { x: distRight, rotate:rotation, duration: 1, opacity: opDown });
          break;
      }
    }
  
    if (activeCardId) {
      const activeTimeline = gsap.timeline();
      switch (activeCardId) {
        case "1":
          activeTimeline.to(p1largeElement, { x: -distLeft,rotate:-rotation, duration: 1, opacity: opUp });
          break;
        case "2":
          activeTimeline.to(p2largeElement, { x: -distLeft,rotate:-rotation, duration: 1, opacity: opUp });
          break;
        case "3":
          activeTimeline.to(p3largeElement, { x: -distLeft,rotate:-rotation, duration: 1, opacity: opUp });
          break;
        case "4":
          activeTimeline.to(p4largeElement, { x: -distLeft,rotate:-rotation, duration: 1, opacity: opUp, scale:0.65 });
          break;
      }
    }
  }, [activeCardId, prevActiveCardId]);
  
  
  
  

  return (
    <div className='App'>
      <Header/>
      <div className="siqui">
        <p>SIMPLE</p>
        <p>QUICK</p>
      </div>
      <div className="large_images_wrapper">
        <img ref={p1largeRef} src={p1large} alt="plat 1" className='img_active' id='img1'/>
        <img ref={p2largeRef} src={p2large} alt="plat 2" className='img_unactive' id='img2'/>
        <img ref={p3largeRef} src={p3large} alt="plat 3" className='img_unactive' id='img3'/>
        <img ref={p4largeRef} src={p4large} alt="plat 4" className='img_unactive' id='img4'/>
      </div> 
      <div className="card_wrapper">
        <CardElement img={p1small} title={"Salmon Salad"} calories={150} time={15} persons={1} id={1} idSender={getCardId}/>
        <CardElement img={p2small} title={"Raw Salmon Salad"} calories={170} time={10} persons={2} id={2} idSender={getCardId}/>
        <CardElement img={p3small} title={"Salmon Stack"} calories={300} time={25} persons={4} id={3} idSender={getCardId}/>
        <CardElement img={p4small} title={"Chicken with Rice"} calories={750} time={35} persons={3} id={4} idSender={getCardId}/>
      </div>

      
    </div>
  )
}

export default App


function Header() {

  // const [isActive, setIsACtive] = useState(false)

  //def des refs
  const navbarElem1 = useRef(null)
  const navbarElem2 = useRef(null)
  const navbarElem3 = useRef(null)

  const cursorRef = useRef(null)

  function handleHeaderItemClick(item){
    const headerItem = item.current
    const cursor = cursorRef.current
    cursor.style.position = 'absolute'
    const cursorX = headerItem.X
    const cursorY = headerItem.y

    gsap.to(headerItem, {y:-10, fontSize:28})
  }

  return (
    <div className='header'>
      <h2>My KF-Kitchen</h2>
      <div className="navbar_cursor"></div>
      <div className="navbar">
        <p ref={navbarElem1} onClick={()=>{handleHeaderItemClick(navbarElem1)}}>Home</p>
        <p ref={navbarElem2} onClick={()=>{handleHeaderItemClick(navbarElem2)}}>About us</p>
        <p ref={navbarElem3} onClick={()=>{handleHeaderItemClick(navbarElem3)}}>Menu</p>
      </div>
    </div>
  )
}

function CardElement({ id,img, title, calories, time, persons, idSender}) {

  const cardRef = useRef(null)

  const imgRef = useRef(null)
  const titleRef = useRef(null)
  const caloriesRef = useRef(null)
  const cardBodyRef = useRef(null)

  useEffect(()=>{
    const imgElement = imgRef.current
    const titleElement = titleRef.current
    const caloriesElement = caloriesRef.current
    const cardBodyElement = cardBodyRef.current

    const cardTimeline = gsap.timeline()
    cardTimeline.fromTo(imgElement, {y:-40, opacity:0}, {y:0, opacity:1, duration:0.2})
    .fromTo(titleElement, {y:-20, opacity:0}, {y:0, opacity:1, duration:0.2})
    .fromTo(caloriesElement, {y:20, opacity:0}, {y:0, opacity: 1, duration:0.2})
    .fromTo(cardBodyElement, {x:-100, opacity:0}, {x:0, opacity: 1, duration:0.8})

  }, [])

  function handleClick(){
    const idOfCard = cardRef.current.id
    // console.log(` idOfCard is ${idOfCard}`)
    idSender(idOfCard)
    const cardElement = cardRef.current
    gsap.to(cardElement, {y:-50, scale: 1.05, duration:0.1})
    gsap.to(cardElement, {y:0, scale:1, delay:1, duration:0.1})
  }

  return (
    <div className='card' id={id} ref={cardRef} onClick={()=>{handleClick()}}>
      <div className="card_header">
        <img src={img} alt="card title" ref={imgRef} />
        <h2 ref={titleRef}>{title}</h2>
        <p ref={caloriesRef}>{`${calories} + calories`}</p>
      </div>
      <div className="card_body" ref={cardBodyRef}>
        <div className="card_infos">
          <p>Time</p>
          <p>{`${time} minutes`}</p>
        </div>
        <div className="card_infos">
          <p>Person</p>
          {persons > 1 ? <p>{`${persons} Persons`}</p> : <p>{`${persons} Person`}</p>}
        </div>
      </div>
    </div>
  )
}

