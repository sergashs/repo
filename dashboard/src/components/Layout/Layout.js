import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import Header from "../Header/Header"
import './layout.scoped.scss';

const Layout = ({ children }) => {
	return (

		<div className="wrapper">
			<Sidebar />
			<div className="rightside">
				<Header></Header>
				<main>{children}</main>
			</div>
		</div>

	)
}

export default Layout;