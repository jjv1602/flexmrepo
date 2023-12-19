import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SectionHeader from '../SectionHeader/SectionHeader';
import image from '../../assets/galleryimg/header_bg.jpg';
import st from './gallery.module.css';

const GalleryPg = () => {
	const [images, setImages] = useState([])
	useEffect(() => {
		const fetchImages = async () => {
			const galleryLength=10;
			const imageImports = [];
			for (let i = 1; i <= galleryLength; i++) {
				const importedImage = await import(`../../assets/galleryimg/gallery${i}.jpg`);
				imageImports.push(importedImage.default);
			}
			console.log(imageImports);
			setImages(imageImports);
		}
		fetchImages();
	}, [])

	return (
		<div>
			<Navbar></Navbar>
			<SectionHeader image={image} title="Gallery" color="white">Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam,
				architecto nostrum nobis, est, deserunt odio illum perspiciatis
			</SectionHeader>
			<section className={st.gallery}>
				<div className={`${st.container} ${st.gallery__container}`}>
					{images.map((image, index) => {
						return (
							<div key={index}>
								<img src={image} alt={`GalleryImage ${index + 1}`} />
							</div>
						);
					})}
				</div>
			</section>
		</div>
	)
}

export default GalleryPg
