export interface Category {
	id: number
	level: 1 | 2 | 3
	name: string
	url: string
	image: string
	totalProducts: number
	featured: boolean
}
