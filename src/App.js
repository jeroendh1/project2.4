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
import RequireRole from "./components/RequireRole";

let date = new Date(); 
const today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
date.setDate(date.getDate() - 70);
const lastWeek = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
//set markers
fetch(
  'http://127.0.0.1:8001/api/weatherData/fa151eab21beca2e70dc029fbeb6f8449c090059534f08f22425beb00346f862?columns=wind_speed,cloud_cover&date_start='+ lastWeek+'&date_end='+today
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
  .catch((err) => { });


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
                <Route path="/home" element={<Home />} />
            </Route>
            <Route element={<RequireRole allowedRoles={["Admin", "User"]} />}>
                <Route path="/station/:stationid" element={ <Station/> } />
            </Route>
            <Route element={<RequireRole allowedRoles={["Admin", "User"]} />}>
                <Route path='/'  element={ <Home/>}/>
            </Route>

            {/*Only Admin routes */}
            <Route element={<RequireRole allowedRoles={["Admin"]} />}>
                <Route path="/test" element={<Test />} />
            </Route>
            <Route element={<RequireRole allowedRoles={["Admin"]} />}>
                <Route path="/register" element={<Register />} />
            </Route>

         </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
