/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function DropdownItem({ url = "", children }) {
	return (
		<li className="sub-menu--item">
			<Link to={url.startsWith('/') ? url : `/${url}`} className="menu-item">
				<span className="menu-item-text">{children}</span>
			</Link>
		</li>
	);
}

export default DropdownItem;
