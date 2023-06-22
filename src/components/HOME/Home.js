import React from 'react'
// import Navbars from '../Navbar/Navbars'
import Contagious from '../Contagious/Contagious'
import Symptoms from '../Symptoms/Symptoms'
import Preventions from '../Preventions/Preventions'
import Guidelines from '../Guidelines/Guidelines'
import CovidAPICharts from '../CovidAPICharts.js/CovidAPICharts'
import Footer from '../Footer/footer'
import Headers from '../Headers/Headers'


import './Home.css'
const Home = () => {
  return (
    
    <div className="Home-Page">
      <Headers></Headers>
      <Contagious></Contagious>
      <Symptoms></Symptoms>
      <Preventions></Preventions>
<Guidelines></Guidelines>
<CovidAPICharts></CovidAPICharts>
<Footer></Footer>      
</div>
  )
}

export default Home
