import './Header.css'
import React from 'react'

import logo from '../../../public/images/logo.svg';

const Header = ({params}) => {
	return (
		<div className="include-header">
			<nav>
				<ul>
					<li><img src={logo} className="logo" alt="logo"/></li>
					<li>Menu1</li>
					<li>Menu2</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
