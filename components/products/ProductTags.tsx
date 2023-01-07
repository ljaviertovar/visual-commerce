import { FC } from "react"
import { Tag } from "@chakra-ui/react"

interface Props {
	tags: string[]
}

const ProductTags: FC<Props> = ({ tags }) => {
	return (
		<>
			{tags.map(tag => (
				<Tag size='sm' variant='solid' bg='emphasis2' color='base' key={tag}>
					{tag}
				</Tag>
			))}
		</>
	)
}

export default ProductTags
