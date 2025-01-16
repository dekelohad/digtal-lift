/* eslint-disable react/prop-types */
function Dropdown({ children }) {
	return (
		<ul className="sub-menu dropdown-menu">
			{children}
		</ul>
	);
}

export default Dropdown;
