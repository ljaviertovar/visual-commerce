import Image from "next/image"
import { QuickLinksFooterStore, PlusInFooterStore, SocialNetworksFooter } from "../ui"

const FooterStore = () => {
	return (
		<footer>
			<Image 
				width={100}
				height={25}
				src="/img/header/SHENDY-VENDY-1.png"
				alt="Shendy Vendy"/>
			<QuickLinksFooterStore/>
			<PlusInFooterStore/>
			<SocialNetworksFooter/>
		</footer>
	)
}

export default FooterStore