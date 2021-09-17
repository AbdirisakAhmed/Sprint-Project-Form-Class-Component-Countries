import React from 'react';

const CountryCard = props => {
 console.log("MyProps", props)
  return (
    <div className="country">
      {/* Display single country here */}
      {props.eachCountry.map(myCountry =>(
       
        <div className="oneCountry">
          
        <h3>Country Name: {myCountry.name}</h3>
        <h3>Population: {myCountry.population}</h3>
        <h3>Land Area: {myCountry.land_area}</h3>
       
        </div>
       
      ))}

    </div>
  );
};


export default CountryCard;

