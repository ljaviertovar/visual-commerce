import { FC } from "react"

import Head from "next/head"
import { HeaderStore, FooterStore } from "../ui"

interface Props {
	title?: string
	children: JSX.Element | JSX.Element[]
}

const LayoutStore: FC<Props> = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>Shendy Vendy</title>
				<meta name='author' content='Visual Code' />
				<meta name='description' content='' />
				<meta name='keywords' content='' />

				{/* <meta property='og:title' content={`Information about ${title}`} />
				<meta property='og:description' content={`Page about ${title}`} />
				<meta property='og:image' content={`${origin}/img/banner.png`} /> */}
			</Head>

			<HeaderStore />
			<main>{children}</main>
			<FooterStore />
		</>
	)
}

export default LayoutStore
