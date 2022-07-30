import { Routes, Route, Link, Outlet } from "react-router-dom";
import './styles/styles.scss';
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home"
import Users from "./Pages/Users/Users"
import User from "./Pages/User/User"

function App() {
  return (

    <Layout>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="/user/:userId" element={<User />} />
        <Route
          path="*"
          element={
            <div>
              <p>There's nothing here!</p>
            </div>
          }
        />
      </Routes>
      <Outlet />
    </Layout>

  );
}



export default App;
