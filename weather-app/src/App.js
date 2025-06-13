import React, { Component } from 'react'
import './App.css';

function App() {
  async function fetchData(){
    const zip = document.getElementById("zip").value;
    const linkers = 'http://api.openweathermap.org/geo/1.0/zip?zip='+zip+',US&appid=38d510ceebe00443dd5e540efbf99044';
    const res = await fetch(linkers)
    if(!res.ok){
      throw new Error("Could not fetch resource"); 
    }
    const data = await res.json();
    return data;

    // const latitude = data.lat;
    // const longitude = data.log;
    // const linkerss = 'https://api.openweathermap.org/data/3.0/onecall?lat='+latitude+'&lon='+longitude+'&exclude=hourly, daily&appid=38d510ceebe00443dd5e540efbf99044';

    // const resTwo = await fetch(linkerss);
    // const dataTwo = await resTwo.json();
    // return dataTwo;
  }    

const handleClick = async () =>{
  try{
    const data = await fetchData();
    document.getElementById("city").innerHTML = data.name;

  }catch(err){
    console.log(err)
  }
}


  return (
    <div className="App">
      <h4>Weather</h4>
      <div className="row">
    <div className="col">
      <input type="text" className="form-control" id = "zip" placeholder="Enter Zip Code"/>
    </div>
    <div className = "col">
       <button onClick = {handleClick} className="btn btn-primary">Submit</button>
    </div>
    </div>
     <div id = "city"></div>
    </div>

  );
}

export default App;
