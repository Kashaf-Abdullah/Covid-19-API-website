import React, { useEffect } from 'react'
import WearMask from '../../img/mask.png'
import WashHand from '../../img/washHand.png'
import NoseRog from '../../img/Nose-Rog.png'
import Animal from '../../img/avoid_animal.png'

import './Preventions.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Preventions = () => {

     useEffect(()=>{
          Aos.init({ duration:2000})
       },[])
  return (
    
      <div className='Preventions-Sections'  data-aos="fade-up">
<h2><strong>How can we prevent it</strong></h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className='Preventions-cards'>
      
      <div className='p-card1 p-c'  data-aos="fade-left">
      <img src={WearMask}></img>
 <p>Wear Mask</p>
 <button className="button-7">More Instruct..</button>
     
      </div>
      <div className='p-card2 p-c'  data-aos="fade-right">
      <img src={Animal}></img>
 <p>Avoids Animal</p>
 <button className="button-7">More Instruct..</button>
      </div><div className='p-card3 p-c'  data-aos="fade-left">
      <img src={WashHand}></img>
 <p>Wash Hands</p>
 <button className="button-7">More Instruct..</button>
     
      </div><div className='p-card4 p-c' data-aos="fade-right">
      <img src={NoseRog}></img>
 <p>Use Nose-Rogs</p>
 <button className="button-7">More Instruct..</button>
         
 </div>
      </div>

      </div>
    
  )
}

export default Preventions
