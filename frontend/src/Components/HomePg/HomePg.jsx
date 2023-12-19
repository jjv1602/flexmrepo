import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import st from './home.module.css';
import TopPg from './TopPg/TopPg';
import Values from './Values/Values';
const HomePg = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('userInfo')){
      navigate("/login");
    };
  },[]);
  return (
    <>
    <Navbar></Navbar>
    <br></br>
    <TopPg></TopPg>
    <Values></Values>
    </>
  )
}

export default HomePg
