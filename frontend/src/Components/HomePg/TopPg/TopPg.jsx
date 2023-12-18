import React from 'react'
import st from "./toppg.module.css";
import { Heading } from '@chakra-ui/react'
import Image from '../../../assets/homepg/main_header.png'
import { useNavigate } from 'react-router-dom';
const TopPg = () => {
  const navigate = useNavigate();
  return (
      <div className={st.main__header}>
        <div className={`${st.container} ${st.main__header_container}`}>
          <div className={st.main__header_left}>
            <h4>#100DaysOfWorkout</h4>
            <h1 style={{textAlign:'left',color:'white'}}>Join The Legends of the Fitness World</h1>
            <p className={st.para}>
              Aute nisi adipisicing sunt adipisicing incididunt veniam fugiat
              labore eiusmod nisi quis ad nulla exercitation. Aute nisi
              adipisicing sunt adipisicing incididunt veniam fugiat labore eiusmod
              nisi quis ad nulla exercitation.
            </p>
            <button className={st.btn} onClick={()=>navigate("/plans")}>Get Started</button>
          </div>
          <div className={st.main__header_right}>
            <div className={st.main__header_circle}></div>
            <div className={st.main__header_image}>
              <img src={Image} alt="MainHeaderImage" />
            </div>
          </div>
        </div>
      </div>

  )
}

export default TopPg
