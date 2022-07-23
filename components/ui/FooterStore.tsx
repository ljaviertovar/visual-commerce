import { QuickLinksFooterStore, PlusInFooterStore, SocialNetworksFooter, ContactFooter } from "../ui"

const FooterStore = () => {
	return (
		<footer>
			<QuickLinksFooterStore/>
			<PlusInFooterStore/>
			<ContactFooter/>
			<SocialNetworksFooter/>
		</footer>
	)
}

export default FooterStore