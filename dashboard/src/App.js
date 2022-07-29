import './styles/styles.scss';
import Layout from "./components/Layout/Layout";
import UsersList from './components/UsersList/UsersList';
import TicketsList from "./components/TicketsList/TicketsList"

function App() {
  return (

    <Layout>
      <UsersList />
      <TicketsList />
    </Layout>

  );
}

export default App;
