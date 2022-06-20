import React from "react";
import { Link } from "react-router-dom"
function Footer(){
    return (
<footer className="py-3 mt-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
      <Link className="nav-link px-2 text-muted" to="/">Home</Link>
        </li>
      <li className="nav-item">
      {localStorage.getItem('Token') != null? <Link className="nav-link px-2 text-muted" to="/signout">Logout</Link> : <Link className="nav-link px-2 text-muted" to="/Login">Login</Link>}
        </li>
    </ul>
    <p className="text-center text-muted">© 2022 WeatherData Company, Inc</p>
  </footer>
    )
}

export default Footer