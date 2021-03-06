import React from "react";
import "./App.css";
import Navbar from "./components/SideBar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Station from './components/pages/Station';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Test from './components/pages/test';
import RequireRole from "./components/RequireRole";

export const HUMIDITY_THRESHOLD = 35;
export const WIND_SPEED_THRESHOLD = 63;
export const HUMIDITY_STATION_KEY = "stationsDataHumidity";
export const WIND_SPEED_STATION_KEY = "stationsDataWindspeed";



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
        station.warning = last_entry.wind_speed > WIND_SPEED_THRESHOLD;
      }
      localStorage.setItem(WIND_SPEED_STATION_KEY, JSON.stringify(stationsdata));
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
      for (const station of Object.values(stationsdata)) {
        const last_entry = station.data[station.data.length - 1];
        station.warning = last_entry.humidity > HUMIDITY_THRESHOLD;
      }
      localStorage.setItem(HUMIDITY_STATION_KEY, JSON.stringify(stationsdata));
    })
  .catch((err) => {});
const Signout = () => {localStorage.removeItem('Token');
 window.location.replace('/login')}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            {/*Public routes */}
            <Route path='/login'  element={ <Login/>}/>
          
            {/*Admin and User routes */}
            <Route element={<RequireRole allowedRoles={["Admin", "User"]} />}>
                <Route path='/'  element={ <Home/>}/>
                <Route path="/home" element={<Home />} />
                <Route path="/station/:stationid" element={ <Station/> } />
                <Route path="/signout" element={<Signout/>} />
            </Route>

            {/*Only Admin routes */}
            <Route element={<RequireRole allowedRoles={["Admin"]} />}>
                <Route path="/test" element={<Test />} />
                <Route path="/register" element={<Register />} />
            </Route>
                      
         
         </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;