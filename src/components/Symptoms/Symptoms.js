import React, { useEffect } from 'react'
import SympImg from '../../img/img4.png'
import SymImg2 from '../../img/img5.png'
import './Symptoms.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Symptoms = () => {
  useEffect(()=>{
    Aos.init({ duration:2000})
 },[])
  return (
    <>
    <div className='Symptoms-Section' data-aos="fade-up">
      <div className='left-symptomsSections' data-aos="fade-left">
  <h2>
  <span>Here are some</span>
  </h2>
  <h2>
  <span>Symptoms of Coronavirus</span>
  </h2>
  <span>Lorem Ipsum is simply dummy text 
  of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard
    
       book</span>
       <span><button className='button-6'>Learn More</button></span>

      </div>
      <div className='right-symptomsSections' data-aos="fade-right">
      <div className='img1-Symptoms' data-aos="fade-down">
      <img src={SympImg}></img>
      </div>
      <div className='img2-Symptoms' data-aos="fade-down">
      <img src={SymImg2}></img>
      </div>
      
      </div>
    
      </div>
      <svg data-aos="fade-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1BB4AC" fill-opacity="1" d="M0,32L1440,128L1440,0L0,0Z"></path></svg>
    
      </>
      )
}

export default Symptoms
