
import UsersList from '../../components/UsersList/UsersList';
import TicketsList from "../../components/TicketsList/TicketsList"
import TasksList from "../../components/TasksList/TasksList"
import './users.scoped.scss'


export function Users() {
	return (
		<div className='users-page'>
			<UsersList />
			<div className='row'>
				<div className='col'><TicketsList /></div>
				<div className='col'><TasksList /></div>
			</div>

		</div>
	);
}


export default Users;
