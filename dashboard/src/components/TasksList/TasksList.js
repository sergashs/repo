import React from 'react';
import './tasks-list.scoped.scss';
import StatusBadge from "../StatusBadge/StatusBadge"

function TasksList() {
	return (
		<div className="tasks-list">
			<div className='header'>
				<div className='row'>
					<h3>Tasks</h3>
					<button>View all</button>
				</div>
				<span className='category'>Today</span>
			</div>
			<ul>
				<li className='create-task'>Create new task <span><img src="/images/icon-013.svg" alt="icon plus" /></span></li>
				<li>Finish ticket update <StatusBadge class="warning" title="Urgent" /></li>
				<li>Create new ticket example <StatusBadge class="success" title="New" /></li>
				<li>Update ticket report <StatusBadge class="default" title="default" /></li>
			</ul>
		</div >
	);
}

export default TasksList;
