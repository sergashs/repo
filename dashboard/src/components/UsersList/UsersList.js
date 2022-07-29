import React, { Component } from 'react';
import './users-list.scoped.scss';

class UsersList extends Component {
	render() {
		return <div className='users-list'>
			<div className='header'>
				<h3>All users</h3>
				<button className='sort-btn'>
					<span className='icon-holder'>
						<img src="/images/icon-012.svg" alt="icon sort users" />
					</span>
					Sort
				</button>
			</div>

		</div>
	}
}

export default UsersList;