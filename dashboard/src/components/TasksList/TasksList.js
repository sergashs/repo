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
				<li>
					<div className='info-holder'>
						<label className="control checkbox">
							<input type="checkbox" />
							<span className="control-indicator"></span>
						</label>
						Finish ticket update
					</div>
					<StatusBadge className="warning" title="Urgent" /></li>
				<li>
					<div className='info-holder'>
						<label className="control checkbox">
							<input type="checkbox" />
							<span className="control-indicator"></span>
						</label>
						Create new ticket example
					</div>

					<StatusBadge className="success" title="New" /></li>
				<li>
					<div className='info-holder'>
						<label className="control checkbox">
							<input type="checkbox" />
							<span className="control-indicator"></span>
						</label>
						Update ticket report
					</div>
					<StatusBadge className="default" title="default" /></li>
			</ul>
		</div >
	);
}

export default TasksList;
