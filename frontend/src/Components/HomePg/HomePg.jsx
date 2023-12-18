import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import st from './home.module.css';
const HomePg = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const userloggedin=localStorage.getItem('userInfo');
    if(!userloggedin){
      navigate('/');
    }
  },[]);
  return (
    <>
    <Navbar></Navbar>
    <div className={st.par}>asdmmmm</div>
    </>
  )
}

export default HomePg
