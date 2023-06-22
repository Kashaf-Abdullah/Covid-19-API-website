import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { BarChart,Bar } from 'recharts';
import {AreaChart,Area} from 'recharts'
// import Navbars from '../Navbar/Navbars';
import './Charts.css'

function Charts() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("Pakistan");

  const getCovidData = async (selectedValue) => {
    const res = await fetch('https://disease.sh/v3/covid-19/countries');
    const actualData = await res.json();

    const selectedData = actualData.find(item => item.country === selectedValue);
    if (selectedData) {
      setData(selectedData);
    } else {
      setData(null);
    }
  };

  useEffect(() => {
    getCovidData(value); // Call it once on mount to initialize the data
  }, [value]);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
  };

  return (
    <div className='Charts-Section'>
   
      <div>
      <div className='combo-Box'>
        <select   class="classic" value={value} onChange={handleChange}>
        
        <option value="Pakistan">Pakistan</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Andorra">Andorra</option>
          <option value="Algeria">Algeria</option>
          <option value="Angola">Angola</option>
        
        
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Australia">Australia</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Sri Lanka">Sri Lanka</option>
        
          <option value="New Zealand">New Zealand</option>
          <option value="Russia">Russia</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="China">China</option>
        
          {/* Add more options here */}
        </select>
     
        <p>{`You selected ${value}`}</p>
     
        </div>
      </div>
<div className='charts-box'>
<div className='Charts  charts-right'>
<ResponsiveContainer aspect={3}>
  {data ? (
    

    <BarChart  data={[data]} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
<CartesianGrid strokeDasharray="6 7" />
<XAxis dataKey="cases"  />
<XAxis dataKey="active"  />
<XAxis dataKey="tests"  />
<XAxis dataKey="population"  />
<XAxis dataKey="critical"  />
<XAxis dataKey="recovered"  />
<XAxis dataKey="deaths"  />


<YAxis  datakey="population"/>


<Tooltip />
<Legend />
<Bar dataKey="cases" fill="#DAF7A6" />
<Bar dataKey="active" fill="#E7674B" />
<Bar dataKey="tests" fill="#DB8915" />
<Bar dataKey="population" fill="#E2EC0D" />
<Bar dataKey="critical" fill="#900C3F" />
<Bar dataKey="recovered" fill="#C70039" />
<Bar dataKey="deaths" fill="#82ca9d" />

</BarChart>



  ) : (
    <p>No data available</p>
  )}
</ResponsiveContainer>


</div>
<div className='charts-left'>     
<ul>
        {data && (
          <li className='cards'>
            <div className='c1 c'>
              <span>YOU SELECTED </span>
              <span>{data.country}</span>
            </div>
            <div  className='c2 c'>
              <span >TOTAL CASES: </span>
              <span>{data.cases}</span>
            </div>
            <div  className='c3 c'>
              <span>TOTAL DEATHS: </span>
              <span>{data.deaths}</span>
            </div>
            <div  className='c4 c'>
              <span>TOTAL RECOVERED: </span>
              <span>{data.recovered}</span>
            </div>
            
            <div  className='c5 c'>
            <span>TOTAL ACTIVE: </span>
            <span>{data.active}</span>
          </div> 
          <div  className='c6 c'>
          <span>TOTAL TESTS: </span>
          <span>{data.tests}</span>
        </div> <div  className='c7 c'>
        <span>TOTAL POPULATION: </span>
        <span>{data.population}</span>
      </div> <div  className='c8 c'>
      <span>TOTAL CRITICAL: </span>
      <span>{data.critical}</span>
    </div>
          </li>
        )}
      </ul>
</div>
     
      </div>
    </div>
  )
}

export default Charts;
