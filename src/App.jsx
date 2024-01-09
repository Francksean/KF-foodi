import './App.css'
import React, {useRef, useState, useEffect} from 'react'

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


  // function findAName(ref){

  //   const cardActive = ref.current
  //   card

  // }

  // la card est cliqué, 
  // la ref de la card est envoyée à la fonction passée en paramètre qui retourne l'id à
  // la fonction qui associe l'id de la card à l'image large associée (l'image est retournée par la fonction)
  // une autre fonction se charge de l'animation de l'image large sélectionnée

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
        <CardElement img={p1small} title={"Salmon Salad"} calories={150} time={15} persons={1} id={1}/>
        <CardElement img={p2small} title={"Raw Salmon Salad"} calories={170} time={10} persons={2} id={2}/>
        <CardElement img={p3small} title={"Salmon Stack"} calories={300} time={25} persons={4} id={3}/>
        <CardElement img={p4small} title={"Chicken with Rice"} calories={750} time={35} persons={3} id={4}/>
      </div>
      
    </div>
  )
}

export default App


function Header() {

  const [isActive, setIsACtive] = useState(false)

  //def des refs
  const navbarElem1 = useRef(null)
  const navbarElem2 = useRef(null)
  const navbarElem3 = useRef(null)

  return (
    <div className='header'>
      <h2>My KF-Kitchen</h2>
      <div className="navbar_cursor"></div>
      <div className="navbar">
        <p ref={navbarElem1}>Home</p>
        <p ref={navbarElem2}>About us</p>
        <p ref={navbarElem3}>Menu</p>
      </div>
    </div>
  )
}

function CardElement({ id,img, title, calories, time, persons}) {
  return (
    <div className='card' id={id}>
      <div className="card_header">
        <img src={img} alt="card title" />
        <h2>{title}</h2>
        <p>{`${calories} + calories`}</p>
      </div>
      <div className="card_body">
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

