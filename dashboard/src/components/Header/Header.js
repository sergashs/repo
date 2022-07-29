import React, { Component } from 'react';
import './header.scoped.scss';

class Header extends Component {
	render() {
		return <header className='header'>
			<div className='container'>
				<div className='left'>
					<h1>Users</h1>
				</div>
				<div className='right'>
					<ul className='menu'>
						<li>
							<img src="/images/icon-010.svg" alt="icon search" />
						</li>
						<li>
							<img src="/images/icon-011.svg" alt="icon news" />
						</li>
					</ul>
					<div className='profile-holder'>
						<span className='name'>Jones Ferdinand</span>
						<div className='avatar-holder'>
							<img src="/images/img-01.jpg" alt="avatar Jones Ferdinand" />
						</div>
					</div>
				</div>
			</div>
			<ul className='user-tabs'>
				<li>
					<a href="#">
						<span className='title'>Active</span>
						<span className='value'>60</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span className='title'>Online</span>
						<span className='value'>16</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span className='title'>Filtered</span>
						<span className='value'>43</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span className='title'>Banned</span>
						<span className='value'>64</span>
					</a>
				</li>
			</ul>
		</header>
	}
}

export default Header;