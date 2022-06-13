import React from "react";
import "./App.css";
import Navbar from "./components/SideBar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Station from './components/pages/Station';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Test from './components/pages/test';

export const HUMIDITY_THRESHOLD = 85;
export const WIND_SPEED_THRESHOLD = 63;

let date = new Date(); 
const today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
date.setDate(date.getDate() - 70);
const lastWeek = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
//set markers
fetch(
  'http://127.0.0.1:8001/api/weatherData/fa151eab21beca2e70dc029fbeb6f8449c090059534f08f22425beb00346f862?columns=wind_speed&date_start='+ lastWeek+'&date_end='+today
)
  .then((response =>  response.json()))
  .then((stationsdata) => {
      for (const station of Object.values(stationsdata)) {
        const last_entry = station.data[station.data.length - 1];
        station.warning = last_entry.humidity > HUMIDITY_THRESHOLD || last_entry.wind_speed > WIND_SPEED_THRESHOLD;
      }
      localStorage.setItem("stations", JSON.stringify(stationsdata));
    })
  .catch((err) => {});
  

//set map 
fetch(
  "https://api.maptiler.com/maps/streets/style.json?key=yOpo9nYZEpUIdZ90sgyw"
)
  .then((response) => {
    response.json().then((stationsdata) => {
      localStorage.setItem("data", JSON.stringify(stationsdata));
    });
  })
  .catch((err) => { });

fetch(
  'http://127.0.0.1:8001/api/weatherData/f680676ff2448c688d1866b50d66f60f7dbc05c0a15bbdbdf52d4487d6ae3732?columns=humidity&date_start='+ lastWeek+'&date_end='+today
)
  .then((response =>  response.json()))
  .then((stationsdata) => {
      localStorage.setItem("stationsDataHumidity", JSON.stringify(stationsdata));
    })
  .catch((err) => {});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={ <Home/>} />
          <Route path='/home'  element={ <Home/>}/>
            <Route path='/login'  element={ <Login/>}/>
            <Route path='/register'  element={ <Register/>}/>
            <Route path='/test'  element={ <Test/>}/>
            <Route path="/station/:stationid" element={ <Station/> } />
         </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;