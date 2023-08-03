import React from 'react' 
import { Route, Routes } from "react-router-dom";
import Otp from "./Otp"
import Login from './Login';
import Home from '../Pages/Home';
import SingleProductPage from '../Pages/SingleProductPage';

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/otp" element={<Otp />} />
     <Route path="/" element={<Home/>} />
     <Route path="/single/:id" element={<SingleProductPage/>}/>
  </Routes>
  )
}

export default AllRoutes