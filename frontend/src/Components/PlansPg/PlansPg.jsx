import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SectionHeader from '../SectionHeader/SectionHeader'
import image from '../../assets/plansbg/yogabg.jpg'
import { plans } from '../data'
import st from './plans.module.css';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { CircularProgress } from '@chakra-ui/react'
const PlansPg = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const book = async (id) => {
    const no_of_batch=JSON.parse(localStorage.getItem("userInfo")).batches;
    if(no_of_batch>=1){
      toast({
        title:"Failed",
        description:'Already booked a batch  For Updating a batch go to MyProfile Section',
        status:"error",
        isClosable: true,
        duration:5000
      })
    }else{
      const userConfirmed = window.confirm('Are you sure you want to book this batch? Remember You can only update the batch at the end of the month ');
      if (userConfirmed) {
        setLoading(true);
        const user_id = JSON.parse(localStorage.getItem("userInfo")).userId;
        
        console.log(user_id);
        try {
          if (user_id == undefined || user_id == null || id == null || id == undefined) { throw new Error("Not Logged In"); }
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
  
          const { data } = await axios.post(
            "/api/booking/add",
            { user_id, batch_id: id },
            config
          );
          localStorage.setItem("batches", JSON.stringify(1));
          toast({
            title: "Batch is booked",
            isClosable: true,
          })
          setLoading(false);
          localStorage.setItem('batch', batchCount);
        } catch (error) {
          console.log(error.message);
          toast({
            title: error.message,
            isClosable: true,
          })
          setLoading(false);
        }
      }
  
    }

  }
  const [batch, setBatch] = useState([]);
  useEffect(() => {
    const fetchbatch = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.get(
          "/api/batch/getBatches",
          config
        );
        setBatch(data);
        console.log(data);

      } catch (error) {
        console.log(error.message);
        toast({
          title: error.message,
          isClosable: true,
          duration:5000
        })
        setLoading(false);
      }
    }
    fetchbatch();
  }, [])
  return (
    <div>
      <Navbar></Navbar>
      <SectionHeader image={image} title="Our Plans" color={'black'}>Et eu reprehenderit esse minim.Et eu reprehenderit esse minim. Et eu
        reprehenderit esse minim.
      </SectionHeader>

      <section className={st.plans}>
        {loading && <CircularProgress isIndeterminate color='green.300' />}
        <div className={st.plans__container}>
          {batch.map(({ id, batchname, helptitle, starttime, endtime, name, available_seats }) => {
            return (
              <div className={`${st.card} ${st.plan}`} key={id}>
                <h3>{batchname}</h3><br></br>
                <small>{helptitle}</small><br></br>
                <h1>Rs 500 </h1><br></br>
                <h2>/mo</h2><br></br>
                <h4>Trainer - {name} </h4>
                <h4>{starttime} - {endtime}</h4><br></br>
                <button className={st.btn} onClick={() => book(id)}>Book Batch </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default PlansPg
