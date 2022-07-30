import React from 'react';
import './users-list.scoped.scss';
import { useState, useEffect } from "react";

function UsersList() {

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((response) => console.log(response));
	}, []);

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
	</div>;

}

export default UsersList;