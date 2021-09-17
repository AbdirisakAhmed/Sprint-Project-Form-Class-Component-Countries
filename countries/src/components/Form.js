import React, {useState} from 'react';
import axios from 'axios';
function Form() {
 const initialData = {
  name: "",
  population: "",
  land_area: "",
  id:Date.now()
 }
  // 1. Set up state for form
  const [formData, setFormData] = useState(initialData);

  // 2. Create "handleChange" function to handle form changes and add changes to above state
  function handleChange(event){
    const newData = {...formData, [event.target.name]: event.target.value}
    setFormData(newData)
    console.log(newData)
    
  }

  // 3. Create "handleSubmit" function to send data to http://localhost:3333/countries using POST request.
        // Make sure to update your countries list to show the recently added country.
        function handleSubmit(event){
          // event.preventDefault()

          axios.post("http://localhost:3333/countries", formData)
          .then((res)=> {
            setFormData(initialData)
          })
        }

    return (
      <div className="main">
      {/* Build your form here */}
      <form onSubmit={handleSubmit} >
        <label> Name: 
        <input type="text" placeholder="Name"
        name="name"
        onChange ={ handleChange}
        value ={formData.name}/>
        </label>
        <label>Population:
        <input type="text" placeholder="Population"
        name="population"
        onChange ={ handleChange}
        value = {formData.population} />
        </label>
        <label> Land Area:
        <input type="text" placeholder="Land Area"
        name="land_area"
        onChange ={handleChange}
        value = {formData.land_area}  />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
    );

}

export default Form;
