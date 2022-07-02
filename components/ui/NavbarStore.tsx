import { BiCart } from "react-icons/bi";
const NavbarStore = () => {
	return (
		<nav>
			<div className="vtex-flex-layout-0-x-flexCol ml0 mr0 pl0 pr0 justify-center  flex flex-column h-100 w-100">
				<div className="vtex-flex-layout-0-x-flexColChild pb0" style={{"height":"auto"}}>
					<a href="/" className="vtex-store-components-3-x-logoLink">
						<span className="store-logo vtex-store-components-3-x-logoContainer vtex-store-components-3-x-sizeDesktop pv4 ph6">
						<img 
							width="200" 
							height="auto" 
							src="https://secureservercdn.net/198.71.233.70/qpd.3b2.myftpupload.com/wp-content/uploads/2022/06/SHENDY-VENDY-1.png?time=1656716474" className="" 
							alt="Shendy Vendy" 
							srcSet="
							https://secureservercdn.net/198.71.233.70/qpd.3b2.myftpupload.com/wp-content/uploads/2022/06/SHENDY-VENDY-1.png 600w,
							https://secureservercdn.net/198.71.233.70/qpd.3b2.myftpupload.com/wp-content/uploads/2022/06/SHENDY-VENDY-1-300x75.png 300w,
							https://secureservercdn.net/198.71.233.70/qpd.3b2.myftpupload.com/wp-content/uploads/2022/06/SHENDY-VENDY-1-150x38.png 150w,
							https://secureservercdn.net/198.71.233.70/qpd.3b2.myftpupload.com/wp-content/uploads/2022/06/SHENDY-VENDY-1-100x25.png 100w" 
							sizes="(max-width: 600px) 100vw, 600px"/>
						</span>
					</a>
				</div>
			</div>
			<ul>
				<li>Para Hombre</li>
				<li>Para Mujer</li>
				<li><BiCart/></li>
			</ul>
		</nav>
	)
}

export default NavbarStore
