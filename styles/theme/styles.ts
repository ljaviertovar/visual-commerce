export const styles = {
	styles: {
		global: {
			"*": {
				boxSizing: "border-box",
			},
			body: {
				padding: 0,
				margin: 0,
				overflowX: "hidden",
				color: "RGBA(0, 0, 0, 0.92)",
			},
			main: {
				width: "calc(100% - 100px)",
				// maxWidth: "1600px",
				margin: "auto",
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			".shadow": {
				boxShadow: "rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px",
			},
			".shadowText": {
				"text-shadow": "0 0 black",
			},
			".swiperHero .swiper-pagination": {
				right: "50px!important",
				display: "flex",
				flexDirection: "column",
			},
			".swiperHero .swiper-pagination-bullet": {
				width: "0.8rem",
				height: "0.8rem",
			},
		},
	},
	colors: {
		primary: "#2657eb",
		secondary: "#de6161",
		emphasis: "#EBBA26",
		base: "RGBA(0, 0, 0, 0.92)",
	},
	fonts: {
		heading: `'Bebas Neue', sans-serif`,
		body: `'Poppins', sans-serif`,
	},
}
