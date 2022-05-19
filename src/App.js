import React from 'react';
import './App.css';
import Navbar from './components/SideBar'
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Footer from './components/Footer';
import  { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={ <Home/>} />
          <Route path='/home'  element={ <Home/>}/>
            <Route path='/login'  element={ <Login/>}/>
         </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
