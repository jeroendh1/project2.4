import axios from "axios";
import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import jwt from "jsonwebtoken";
const api_base = 'http://localhost:3001'

const RequireRole = ({ allowedRoles }) =>
    allowedRoles.includes(getRoles()) ? <Outlet/> :  <Navigate to="/login" replace/>


function getRoles(){
    if (verifyToken()){
        console.log(verifyToken())
        const token = localStorage.getItem("Token")
        console.log(JSON.parse(atob(token.split('.')[1])).roles[0])
        return JSON.parse(atob(token.split('.')[1])).roles[0]
    }
}

function verifyToken() {

    const token =localStorage.getItem("Token");
    if (token == null) return false
    const payload = token.split(' ')[0]
    const secretToken = "d3a4280dc18a83d170ceb4e8db3feac3bbc9d6e6722d25dad0c3131ebd4274861083234c67a00b3cf0dc17e4658e703e1f188a7175989277a0d0aaf3bff844bd"
    
    return jwt.verify(token, secretToken, function (err, data) {
        return !err;
    });
}



export default RequireRole;