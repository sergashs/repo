import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './user.scoped.scss'




export function User() {
	let params = useParams();


	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/users/${params.userId}`
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

	return (
		<div className='user-profile'>
			<div className="header">
				<div className="avatar-holder">
					<img src="/images/img-04.jpg" alt={data && 'avatar' + data.name} />
				</div>
				<div className="bg">
					<img src="/images/img-03.jpg" alt="background" />
				</div>
			</div>
			<div className="body">
				<h1>{data && data.name}</h1>
				<div className="user-description">
					<p>{data && data.company.catchPhrase}</p>
				</div>
				<ul className="user-info">
					<li>
						<h3>Address</h3>
						<p>{data && data.address.street}, {data && data.address.suite}  <br />{data && data.address.city}, {data && data.address.zipcode}</p>
					</li>
					<li>
						<h3>Phone</h3>
						<p>{data && data.phone}</p>
					</li>
					<li>
						<h3>Website</h3>
						<a href={data && 'http://' + data.website} target="_blank">{data && data.website}</a>
					</li>
				</ul>
			</div>


			{/* {data && data.name} */}
		</div >
	);
}


export default User;
