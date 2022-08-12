import { Box } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectFade, Autoplay } from "swiper"

import { RichBannerFull } from "./"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"

import slider1 from "../../public/img/heroSlider/slider1.jpg"
import slider2 from "../../public/img/heroSlider/slider2.jpg"

const cards = [
	{
		id: 1,
		banner: slider1.src,
		pretitle: "Welcome!",
		title: "Visual Commerce",
		subtitle: "Choose the best comfort at all times",
		sizeButton: "lg",
		textButton: "Shop now",
		linkButton: "/",
	},
	{
		id: 2,
		banner: slider2.src,
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
							<RichBannerFull
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
