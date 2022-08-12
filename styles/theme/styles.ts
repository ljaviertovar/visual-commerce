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
			".shopSection": {
				width: "calc(100% - 100px)",
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
				textShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
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
		primary: "#2b32b2",
		secondary: "#1488cc",
		emphasis: "#A1FFCE",
		emphasis2: "#FAFFD1",
		base: "RGBA(0, 0, 0, 0.92)",
		baseLight: "#fff",
		btnPrimaryBase: "RGBA(0, 0, 0, 0.92)",
		btnSecondaryBase: "RGBA(0, 0, 0, 0.64)",
	},
	fonts: {
		heading: `'Bebas Neue', sans-serif`,
		body: `'Poppins', sans-serif`,
	},
}
