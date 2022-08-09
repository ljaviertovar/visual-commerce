import { Box, Image } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, FreeMode } from "swiper"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import img from "../../public/img/brand.png"

const brands = [
	{
		id: 1,
		alt: "brand",
		image: img,
		linkFilter: "/",
	},
	{
		id: 2,
		alt: "brand",
		image: img,
		linkFilter: "/",
	},
	{
		id: 3,
		alt: "brand",
		image: img,
		linkFilter: "/",
	},
	{
		id: 4,
		alt: "brand",
		image: img,
		linkFilter: "/",
	},
	{
		id: 5,
		alt: "brand",
		image: img,
		linkFilter: "/",
	},
]

const SliderBrands = () => {
	return (
		<>
			<Swiper
				slidesPerView={5}
				spaceBetween={8}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				modules={[FreeMode, Pagination]}
			>
				{brands.map(({ id, alt, image }) => (
					<SwiperSlide key={id}>
						<Box boxSize='60px' margin='auto' display='flex' alignItems='center'>
							<Image src={image.src} alt={alt} />
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default SliderBrands
