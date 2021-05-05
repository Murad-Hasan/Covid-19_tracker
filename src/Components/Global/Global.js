import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import CovidResultCard from '../CovidResultCard/CovidResultCard';
import './Global.css'
const Global = () => {

    const [covidData, setCovidData] = useState({ 
        totalConfirmed: 0,
        totalDeaths:0,
        totalRecovered:0,
        activeCase:0
     });
 
    useEffect(() => {
        const fetchData = async () => {  //if you want you can use try and catch for catch error when api called
          const result = await axios(
            'https://api.covid19api.com/summary',
          );
          let totalCovidPeople = result.data.Global;
          setCovidData({
            totalConfirmed:totalCovidPeople.TotalConfirmed,
            totalDeaths:totalCovidPeople.TotalDeaths,
            totalRecovered:totalCovidPeople.TotalRecovered,
            activeCase:totalCovidPeople.TotalConfirmed - (totalCovidPeople.TotalRecovered + totalCovidPeople.TotalDeaths)
          })
        };
        fetchData();
      }, []);
    // console.log(covidData);

    const covidDataCollection = Object.keys(covidData).map((key, index) => (
        <CovidResultCard
        key={index}
        about={key}
        total={<NumberFormat value={covidData[key]} thousandSeparator={true} displayType="text"/>}
        />
    ))
    // console.log(covidDataCollection);
    return (
     <div className="global">
         <h1 className="heading"><img src="https://raw.githubusercontent.com/adrianhajdin/project_corona_tracker/master/src/images/image.png" alt=""/> Tracker</h1>
         <p className="description">Let's Check Information About Covid-19</p>
         <div className="world-stats">
            {covidDataCollection}
         </div>
     </div>
    );
};

export default Global;