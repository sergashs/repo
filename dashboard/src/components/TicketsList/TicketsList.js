import React, { Component } from 'react';
import './tickets-list.scoped.scss';

class TicketsList extends Component {
	render() {
		return <div className="tickets-list">
			<div className='header'>
				<div className='row'>
					<h3>Unresolved tickets</h3>
					<button>View details</button>
				</div>
				<span className='category'>Group: <span>Support</span></span>
			</div>
			<ul>
				<li>Waiting on Feature Request <span>4238</span></li>
				<li>Awaiting Customer Response <span>1005</span></li>
				<li>Awaiting Developer Fix <span>914</span></li>
				<li>Pending <span>281</span></li>
			</ul>
		</div>
	}
}

export default TicketsList;
