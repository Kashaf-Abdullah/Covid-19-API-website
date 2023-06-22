
import React, { useEffect } from 'react'
import card1 from '../../img/card1.jpg'
import card2 from '../../img/card2.jpg'
import card3 from '../../img/card3.jpg'
import card4 from '../../img/card4.jpg'

import './Contagious.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Contagious = () => {
  useEffect(()=>{
    Aos.init({ duration:1000})
 },[])
  return (
 
    <div className='Contagious-Section' data-aos="fade-up">
    <h2>How can contagious it</h2>
    <p>  Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document<br/> or a typeface without relying on meaningful content. </p>
      <div className='Cards'>
      <div className='c1 card' data-aos="fade-right">
      <img src={card1}></img>
      <h4><strong>CARDSS HEADING</strong></h4>
      <p> site about Lorem Ipsum
      </p>
      </div>
      <div className='c2 card' data-aos="fade-right">
      <img src={card2}></img>
      <h4><strong>CARDSS HEADING</strong></h4>
      <p> site about Lorem Ipsum
      </p></div>
      <div className='c3 card' data-aos="fade-left">
      <img src={card3}></img>
      <h4><strong>CARDSS HEADING</strong></h4>
      <p> site about Lorem Ipsum
      </p></div>
      <div className='c4 card' data-aos="fade-left">
      <img src={card4}></img>
      <h4><strong>CARDSS HEADING</strong></h4>
      <p> site about Lorem Ipsum
      </p></div>
      
      </div>
    </div>
  )
}

export default Contagious
