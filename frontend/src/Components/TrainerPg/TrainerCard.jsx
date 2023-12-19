import React from 'react'
import st from "./trainercard.module.css";
import {Image} from '@chakra-ui/react'
const TrainerCard = ({key,image, name, job, socials}) => {
    return (
        <>
            <div className={`${st.card} ${st.trianer}`} key={key}>
                <div className={st.trainer__img}>
                <Image src={image} alt='Dan Abramov' />
                </div>
                <h3>{name}</h3>
                <p>{job}</p>
                <div className={st.trainer__socials}>
                    {socials.map(({ icon, link }, index) => {
                        return (
                            <a
                                href={link}
                                key={index}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                {icon}
                            </a>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default TrainerCard
