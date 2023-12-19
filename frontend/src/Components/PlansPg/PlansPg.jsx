import React from 'react'
import Navbar from '../Navbar/Navbar'
import SectionHeader from '../SectionHeader/SectionHeader'
import image from '../../assets/plansbg/yogabg.jpg'
import { plans } from '../data'
import st from './plans.module.css';
const PlansPg = () => {
  const book=(id,name,desc,price)=>{
    console.log(id+name+desc+price);
  }
  return (
    <div>
      <Navbar></Navbar>
      <SectionHeader image={image} title="Our Plans" >Et eu reprehenderit esse minim.Et eu reprehenderit esse minim. Et eu
        reprehenderit esse minim.
      </SectionHeader>

      <section className={st.plans}>
        <div className={st.plans__container}>
          {plans.map(({ id, name,  desc ,price ,timings }) => {
            return (
              <div className={`${st.card} ${st.plan}`} key={id}>
                <h3>{name}</h3><br></br>
								<small>{desc}</small><br></br>
								<h1>{`Rs ${price}`}</h1><br></br>
								<h2>/mo</h2><br></br>
								<h4>{timings}</h4><br></br>
                <button className={st.btn} onClick={()=>book(id,name,desc,price)}>Book Batch </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default PlansPg
