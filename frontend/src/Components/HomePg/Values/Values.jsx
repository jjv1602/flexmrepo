import React from 'react'
import st from "./values.module.css";
import {values} from '../../data';
import Image from "../../../assets/homepg/values.jpg";
import { FaDove } from "react-icons/fa";
import { MdOutlineDiamond } from "react-icons/md";
const Values = () => {
  return (
    <section className={st.values}>
			<div className={`${st.container} ${st.values__container}`}>
				<div className={st.values__left}>
					<div className={st.values__image}>
						<img src={Image} alt="values Image" />
					</div>
				</div>
				<div className={st.values__right}>
					<div className={st.section__head} >
                        <span><MdOutlineDiamond />   </span>
                        <h2 style={{color:'var(--color-secondary)'}}>Values</h2>
                    </div>
					<p style={{color:"#ffffff"}}>
						anim et. Officia exercitation veniam consectetur ad labore pariatur
						aonsectetur ad labore pariatur.
					</p>
					<div className={st.values__wrapper}>
						{values.map(({ id, icon, title, desc }) => {
							return (
								<div className={`${st.card} ${st.values__value}`} key={id}>
									<span><FaDove /></span>
									<b>{title}</b>
									<small>{desc}</small>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
  )
}

export default Values
