import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

const [countries, setCountries] =useState([]);

const [visitedCountries, setVisitedCountries] =useState([]);
// step1:
const [visitedFlags, setVisitedFlags]=useState([]);


useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => setCountries(data));


}, [])

const handleVisitedCountry = country =>{
    console.log('add to your country visited')
    // console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
}

// step2:evenhandler add
const handleVisitedFlags= flag =>{

    // console.log('flag adding')
    // step6:new array create korey agergula soho copy korey
    const newVisitedFlags= [...visitedFlags, flag]
setVisitedFlags(newVisitedFlags);
}



    return (
        // visited country
        <div>
           <h3>Countries: {countries.length}</h3> 
        <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
        {

            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
        }

        </ul>
       


           </div>
 {/* step7:show korbo flags gula */}
 <div className="flag-container">

{
    visitedFlags.map(flag => <img src={flag}></img>)
}


 </div>


           {/* display countries */}
          <div className="country-container">
             {
                 countries.map(country => <Country
                 key={country.cca3} 
                 handleVisitedCountry={handleVisitedCountry}
                //  step3:pathabo
                handleVisitedFlags={handleVisitedFlags}
                 
                 country={country}></Country>)
           }
          </div>
        </div>
    );
};

export default Countries;