import { useState } from "react";
import "./App.css";
import Form from "./comps/form/Form";
import Table from "./comps/table/Table";

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers(users.concat(user));
    console.log("users:", users);
  };

  return (
    <div className="App">
      <Form addUser={addUser} />
      <Table tableHeaders={["Username", "Gender", "Role"]} tableDatas={users} />
    </div>
  );
}

export default App;
