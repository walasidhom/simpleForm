import Navigation from "./Components/Navigation";
import ToDoApp from "./Pages/ToDoApp";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Checkpoints from "./Pages/Checkpoints";
import One2Ones from "./Pages/One2Ones";
import Error from "./Components/Error";
import Axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <>
      <Navigation />
      <div
        style={{
          margin: "2rem",
          display: "grid",
          alignContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <h6>Welcome to our Loki's App</h6>
        <Routes>
          <Route path="/*" element={<Error />} />
          <Route path="/home" element={<Home userList={users} />} />
          <Route path="/toDoApp" element={<ToDoApp />} />
          <Route path="/checkpoints" element={<Checkpoints />} />
          <Route path="/one2ones" element={<One2Ones />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
