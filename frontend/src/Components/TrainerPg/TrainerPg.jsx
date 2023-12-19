import React from 'react'
import Navbar from '../Navbar/Navbar'
import st from "./trainer.module.css";
import HeaderImage from "../../assets/trainerbg/header_bg_5.jpg";
import SectionHeader from '../SectionHeader/SectionHeader';
import { trainers } from '../data';
import TrainerCard from './TrainerCard';
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const TrainerPg = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SectionHeader image={HeaderImage} title="Our Trainers" color="white">
				Adipisicing labore laboris ea sunt cillum ea velit.Adipisicing labore la
				boris ea sunt cillum ea velit. sunt cillum ea velit.
			</SectionHeader>

      <section className={st.trainers}>
				<div className={`${st.container} ${st.trainers__container}`}>
					{trainers.map(({ id, image, name, job, socials }) => {
						return (
							<TrainerCard
								key={id}
								image={image}
								name={name}
								job={job}
								socials={[
									{ icon: <BsInstagram />, link: socials[0] },
									{ icon: <AiOutlineTwitter />, link: socials[1] },
									{ icon: <FaFacebookF />, link: socials[2] },
									{ icon: <FaLinkedinIn />, link: socials[3] },
								]}
							/>
						);
					})}
				</div>
			</section>
    </div>
  )
}

export default TrainerPg
