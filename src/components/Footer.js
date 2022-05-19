import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap'
function Footer(){
    return (
<footer class="py-3 mt-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Login</a></li>
    </ul>
    <p class="text-center text-muted">© 2022 WeatherData Company, Inc</p>
  </footer>
    )
}

export default Footer