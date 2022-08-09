import { Box } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectFade, Autoplay } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"

import { RichBannerC } from "./"

const cards = [
	{
		id: 1,
		banner: "https://shendyvendy.com/wp-content/uploads/2022/05/716A0756-scaled.jpg",
		pretitle: "Welcome!",
		title: "Visual Commerce",
		subtitle: "Choose the best comfort at all times",
		sizeButton: "lg",
		textButton: "Comprar ahora",
		linkButton: "/",
	},
	{
		id: 2,
		banner:
			"https://secureservercdn.net/198.71.233.70/qpd.3b2.myftpupload.com/wp-content/uploads/2022/05/716A0754-scaled.jpg?time=1658699039",
		pretitle: "Use the cupon",
		title: "vcrce000",
		sizeButton: "md",
	},
]

const HeroSlider = () => {
	return (
		<>
			<Swiper
				direction='vertical'
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 5000,
				}}
				effect='fade'
				fadeEffect={{
					crossFade: true,
				}}
				modules={[Pagination, EffectFade, Autoplay]}
				style={{ height: "600px" }}
				className='swiperHero'
			>
				{cards.map(({ id, banner, pretitle, title, linkButton, subtitle, sizeButton, textButton }) => (
					<SwiperSlide key={id}>
						<Box h='600px'>
							<RichBannerC
								banner={banner}
								pretitle={pretitle}
								title={title}
								subtitle={subtitle}
								sizeButton={sizeButton}
								textButton={textButton}
								linkButton={linkButton}
							/>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default HeroSlider
