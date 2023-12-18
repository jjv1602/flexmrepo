import React from 'react'
import { BeatLoader } from 'react-spinners';
const Loader = () => {
  return (
    <div style={{height:'100vh',width:"100vw" ,backgroundColor:"#000000",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <BeatLoader
          color={'#36d7b7'} 
          size={"10vh"}
          style={{marginLeft:"auto",marginRight:"auto"}}
        />
    </div>
  )
}

export default Loader
