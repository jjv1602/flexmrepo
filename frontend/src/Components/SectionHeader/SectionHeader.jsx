import React from "react";
import st from './header.module.css';
const SectionHeader = ({ title, image, children }) => {
	return (
		<header className={st.header}>
			<div className={st.header__container}>
				<div className={st.header__container_lg}>
					<img src={image} alt="Header Background image" />
				</div>
				<div className={st.header__content}>
					<h2>{title}</h2>
					<p>{children}</p>
				</div>
			</div>
		</header>
	);
};

export default SectionHeader;
