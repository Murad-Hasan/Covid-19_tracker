import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountriesDetails from '../CountriesDetails.js/CountriesDetails';
import HeadingNames from '../HeadingNames/HeadingNames';
import './Countries.css'

const Countries = () => {
    const [countryDetail , setCountryDetails] = useState()

    useEffect(() => {
        const fetchData = async () => {  //if you want you can use try and catch for catch error when api called
          const result = await axios(
            'https://api.covid19api.com/summary',
          );
          let totalCountryDetails = result.data.Countries;
          // console.log(totalCountryDetails);
          setCountryDetails({countryDetails:totalCountryDetails, status:true, selectDate:totalCountryDetails })
          
        };
        fetchData();
      }, []);
      console.log(countryDetail?.countryDetails.length);
      
      
    return (
        <div className="countries">
            <h2 className="countries-heading">Countries</h2>
            <div className="filtering">
                <input type="text" placeholder='Enter Country Name'/>
                <select className="sort-by">
                    <option value="Height">Height</option>
                    <option value="Lowest">Lowest</option>
                </select>
            </div>
            <HeadingNames/>
            {
              countryDetail?.countryDetails.length > 0 ?
              countryDetail.selectDate.map((cur, index) => {
                   return <CountriesDetails
                   key={index}
                   countryCode={cur.CountryCode}
                  totalCases={cur.TotalConfirmed}
                  newCases={cur.NewConfirmed}
                  totalDeaths={cur.TotalDeaths}
                  newDeaths={cur.NewDeaths}
                  totalRecovered={cur.TotalRecovered}
                  newRecovered={cur.NewRecovered}/> 
              }): null
            }
        </div>
    );
};

export default Countries;