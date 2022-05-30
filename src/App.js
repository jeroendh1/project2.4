import React from "react";
import "./App.css";
import Navbar from "./components/SideBar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Station from './components/pages/Station';


//set markers
fetch(
  "http://10.0.0.41:8001/api/weatherData/wind_speed/fa151eab21beca2e70dc029fbeb6f8449c090059534f08f22425beb00346f862"
)
  .then((response =>  response.json()))
  .then((stationsdata) => {
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
  .catch((err) => {});


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home/>} />
          <Route path='/map'  element={ <Home/>}/>
          <Route path="/station/:stationid" element={ <Station/> } />
         </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
