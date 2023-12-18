import React, { useEffect } from 'react'

const HomePg = () => {
  useEffect(()=>{
    const userloggedin=localStorage.getItem('userInfo');
  },[]);
  return (
    <div>
      HOME PAGE
    </div>
  )
}

export default HomePg
