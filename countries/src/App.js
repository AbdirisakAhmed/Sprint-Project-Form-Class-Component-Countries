import React, { Component } from 'react';
// Import Components here
import Form from './components/Form';
import './index.css';
import './App.css';
import axios from 'axios';
import CountriesList from './components/CountriesList';



class App extends Component {

  // Build Your constructor with state of "countries: []"
  constructor(){
    super()
    this.state={
      myData:[]
    }
  }


  // Use componentDidMount to make a call to API call to http://localhost:3333/countries and set it to the state.
componentDidMount(){
  axios.get("http://localhost:3333/countries")
  .then((res)=> {
    
    this.setState({
      myData:[res.data]
    })
  })
}

  render() {
    return (
      <div className="App">
        <h1>COUNTRIES! </h1>
      <Form />
      <CountriesList country ={this.state.myData} />
     
      </div>
    );
  }
}

export default App;
