import React from 'react'
import './Headers.css'
import img1 from '../../img/img1.png'

const Headers = () => {

  
  return (<>
  <div className="Header-Section" >
    <div className='Headerr'>
      <div className='left-header'>
     
      <div className='left-headerTxt'>
      <span>STAY HOME</span>
      <span>STAY SAFE</span>
      <span>FROM COVID-19</span>
      <span><p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock      
    </p></span>
      <div className='left-header-btn'>
      <button class="button-5" role="button">Learn More </button>

      <button class="button-5" role="button">More info </button>

      </div>
      </div>
      
      </div>
      
      <div className='right-header'>
      <img src={img1}></img></div>

    </div>

   
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
<path fill="#ffd6d6" fill-opacity="1" d="M0,96L360,96L720,96L1080,0L1440,64L1440,0L1080,0L720,0L360,0L0,0Z"></path>
</svg>
</>
  )
}

export default Headers
