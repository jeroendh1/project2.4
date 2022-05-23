import React from 'react';
import './App.css';
import Navbar from './components/SideBar'
import Home from './components/pages/Home';
import Footer from './components/Footer';
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import Station from './components/pages/Station';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={ <Home/>} />
          <Route path='/map'  element={ <Home/>}/>
          <Route path='/station'  element={ <Station/>}/>
         </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
