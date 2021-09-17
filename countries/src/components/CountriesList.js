import React, { Component } from 'react';


// Import Components here
import CountryCard from './CountryCard';

class CountriesList extends React.Component {
constructor(props){
  super()
}


  render() {
    return (
      <div className="Countries">
        <h1>List of All Countries</h1>
       {this.props.country.map(oneCountry =>(
        <CountryCard eachCountry ={oneCountry}/>
    ))}
      </div>
    );
  }
}


export default CountriesList;
