import React from 'react';
import './status-badge.scoped.scss';

function StatusBadge(props) {
	return (
		<span className={`status-badge ${props.class}`}>
			{props.title}
		</span>
	);
}

export default StatusBadge;
