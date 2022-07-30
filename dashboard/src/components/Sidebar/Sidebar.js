import React, { Component } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import './sidebar.scoped.scss';

class Sidebar extends Component {
	render() {
		return <aside className='sidebar'>
			<strong className='logo'>
				<span className='icon'></span>
				Dashboard
			</strong>
			<nav>
				<ul className='menu'>
					<li>
						<NavLink to="/">
							<span className='icon-holder'>
								<img src="/images/icon-01.svg" alt="icon Overview" />
							</span>
							Overview</NavLink>
					</li>
					<li>
						<NavLink to="/users">
							<span className='icon-holder'>
								<img src="/images/icon-02.svg" alt="icon Users" />
							</span>
							Users</NavLink>
					</li>
					<li>
						<a href="#">
							<span className='icon-holder'>
								<img src="/images/icon-03.svg" alt="icon Ideas" />
							</span>
							Ideas</a>
					</li>
					<li>
						<a href="#">
							<span className='icon-holder'>
								<img src="/images/icon-04.svg" alt="icon Contacts" />
							</span>
							Contacts</a>
					</li>
					<li>
						<a href="#">
							<span className='icon-holder'>
								<img src="/images/icon-05.svg" alt="icon Agents" />
							</span>
							Agents</a>
					</li>
					<li>
						<a href="#">
							<span className='icon-holder'>
								<img src="/images/icon-06.svg" alt="icon Articles" />
							</span>
							Articles</a>
					</li>
					<li>
						<a href="#">
							<span className='icon-holder'>
								<img src="/images/icon-07.svg" alt="icon Settings" />
							</span>
							Settings</a>
					</li>
					<li>
						<a href="#">
							<span className='icon-holder'>
								<img src="/images/icon-09.svg" alt="icon Subscription" />
							</span>
							Subscription</a>
					</li>
				</ul>
			</nav>
		</aside>
	}
}

export default Sidebar;