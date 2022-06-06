import React from 'react';
import './App.css';
import Navbar from './components/SideBar'
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Footer from './components/Footer';
import Test from './components/pages/test';
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from "./components/pages/Register";


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
         </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
