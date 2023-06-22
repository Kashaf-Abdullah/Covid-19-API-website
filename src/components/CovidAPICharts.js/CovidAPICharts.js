import React, { useEffect } from 'react'
import './CovidAPICharts.css'
import chart1 from '../../img/chart1.PNG'
import chart2 from '../../img/chart2.PNG'
import { NavLink } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
const CovidAPICharts = () => {
  useEffect(()=>{
    Aos.init({ duration:2000})
 },[])
  return (
    <>
    <div className='CovidAPICharts-heading' data-aos="fade-up">
    <h2>COVID API ANALYSIS CHART</h2>
    <button className='button-9'><NavLink exact to='/covidapi' className="try-it-btn" activeClassName="active">TRY IT </NavLink></button>
    </div>
    
    <div className='CovidAPICharts-Section' data-aos="fade-down">
    <div className='CovidAPICharts-left' data-aos="fade-left">
    <h3><strong>CHART 1</strong></h3>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
   <img src={chart1}></img>
    </div>
    <div className='CovidAPICharts-right' data-aos="fade-right">

    <img src={chart2}></img>
    <h3><strong>CHART 2</strong></h3>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>

    </div>
    

    </div>
</>
    )
}

export default CovidAPICharts
