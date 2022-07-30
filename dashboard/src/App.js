import './styles/styles.scss';
import Layout from "./components/Layout/Layout";
import UsersList from './components/UsersList/UsersList';
import TicketsList from "./components/TicketsList/TicketsList"
import TasksList from "./components/TasksList/TasksList"

function App() {
  return (

    <Layout>
      <UsersList />
      <TicketsList />
      <TasksList />
    </Layout>

  );
}

export default App;
