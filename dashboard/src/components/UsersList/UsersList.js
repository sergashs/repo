import React, { useCallback } from 'react';
import { useState, useEffect } from "react";
import './users-list.scoped.scss';
import StatusBadge from "../StatusBadge/StatusBadge"
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export function UsersList() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);




	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/users?_limit=8`
				);
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				let actualData = await response.json();
				setData(actualData);
				setError(null);
			} catch (err) {
				setError(err.message);
				setData(null);
			} finally {
				setLoading(false);
			}
		}
		getData()
	}, [])


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


		<table>
			<thead>
				<tr>
					<th width="370px">User details</th>
					<th width="230px">Company name</th>
					<th width="140px">Email</th>
					<th width="104px">Distance</th>
					<th width="50px"></th>
				</tr>
			</thead>
			<tbody>
				<tr>

					{loading && <td> <div>A moment please...</div></td>}
					{error && (
						<td><div>{`There is a problem fetching the post data - ${error}`}</div></td>
					)}
				</tr>

				{data &&
					data.map(({ id, username, name, company, email, website }) => (

						<tr key={id} >
							<td>
								<Link
									to={`/user/${id}`}
									key={id}
									className="link-to-user"
								>
								</Link>
								<div className='user-profile'>
									<div className='avatar-holder'>
										<img src="images/img-02.jpg" alt="user avatar" />
									</div>
									<div className='info-holder'>
										<span className='txt-1'>{name}</span>
										<span className='txt-2'>{username}</span>
									</div>
								</div>
							</td>
							<td>
								<span className='txt-1'>{company.name}</span>
								<span className='txt-2'>{company.bs}</span>
							</td>
							<td>
								<span className='txt-1'><a href={'mailto:' + email}>{email}</a></span>
								<span className='txt-2'><a href={'http://' + website} target="_blank">{website}</a></span>
							</td>
							<td><StatusBadge className="danger" title="hight" /></td>
							<td><button><img src="/images/icon-014.svg" alt="user avatar" /></button></td>
						</tr>
					))}
			</tbody>
		</table>
		<Outlet />
	</div >;

}

export default UsersList;