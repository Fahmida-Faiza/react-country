
import { useState } from 'react';
import './Country.css'
// step4:distructure props pabo handleVisitedFlags agula..
const Country = ({country , handleVisitedCountry , handleVisitedFlags}) => {
    // console.log(country)
    const {name, flags, population, area, cca3} =country;

    const [visited, setVisited] = useState(false)
    const handleVisited =()=>{
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name:{name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            {/* step5:paramiter pathabo array tey */}
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {/* {visited && 'I have visite this place'} */}
            {visited ? 'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;