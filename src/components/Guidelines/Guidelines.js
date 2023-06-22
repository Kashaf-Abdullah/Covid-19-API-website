import React,{useEffect, useState} from 'react'
import Covid from '../../img/covid.gif'

import './Guidelines.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Guidelines = () => {

  const [selected,setSelected]=useState(null)
  const toggle=(i)=>{

  if(selected===i){

    return setSelected(null)
  }
  setSelected(i)
  }


  
  useEffect(()=>{
    Aos.init({ duration:2000})
 },[])
  return (
    <>
    <div className='Guidlines-Section' data-aos="fade-up">
    
      <div className='Guidlines-Container'>

      <div className='Guidline-left' data-aos="fade-right" >

      <div className='imageGif1'><img src={Covid}/></div>
      <div className='imageGif2'><img src={Covid}/></div>
      <div className='imageGif3'><img src={Covid}/></div>
      
      </div>
      <div className='Guidline-right' data-aos="fade-lefy">
      
      <span>
    Guideline for </span>
    <span>Home Quarantine</span>
    <div className='wrapper'>
    <div className='accordian'>
    {data.map((item,i)=>(
      <div className='item'>
      <div className='title' onClick={()=>
      toggle(i)
      }>
      <h2>{item.question}</h2>
      <span>{selected=== i ? '-' : '+'}</span>
      </div>
      <div className={selected===i ? 
        'content show' : 'content'}>
      {item.answer}
      </div>
      </div>
  ))}

  

  </div>

    </div>
      </div>

      </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FE6C8A" fill-opacity="1" d="M0,96L720,224L1440,128L1440,0L720,0L0,0Z"></path></svg>
      </>

  
    )
}

   
export default Guidelines

const data=[

    {
      question :'WHAT IS COVID-19?' ,
      answer:' Human coronaviruses are common throughout the world. The name corona refers to a crown because these viruses have crown-like spikes on their surface when viewed under an electron microscope  '
    },
 
      {
        question :'WHO IS AT MOST RISK FOR COVID-19?' ,
        answer:' As there is community transmission of SARS-CoV-2 in South Africa, all South Africans are at risk of infection with SARS-CoV-2 (illness called COVID-19) '
      },
      {
        question :'HOW IS COVID-19 DIAGNOSED?' ,
        answer:'COVID-19 is diagnosed by a laboratory test, polymerase chain reaction (PCR) molecular test, on a respiratory tract sample (e.g. sample from nose, throat or chest). This test detects the SARS-CoV-2 genetic material.  '
      },
    {  question:'WHAT CAN I DO TO PREVENT INFECTION?',
      answer:'Individuals at increased risk of severe COVID-19.The following groups of individuals have an increased risk of severe COVID-19 illness (i.e. require hospitalisation, assistance to help them breathe, admission to intensive care unit or even die'
    },
      {  question:'HOW IS COVID-19 TREATED?',
      answer:'Treatment is supportive (e.g. provide oxygen for patients with shortness of breath or treatment for fever). '},
     
      {  question:'WHO CAN I CONTACT FOR MORE INFORMATION?',
      answer:'For medical/clinical related queries by health care professionals only, contact the NICD hotline at 0800 111131. The NICD General Public Hotline number is 0800 029 999. All lines operate 24 hours a day.'},
     
      
    ]