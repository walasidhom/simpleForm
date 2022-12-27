import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Checkpoints from "./Pages/Checkpoints";
import Home from "./Pages/Home";
import One2Ones from "./Pages/One2Ones";
import ToDoApp from "./Pages/ToDoApp";
import Error from "./Error";
import Axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };
  useEffect(() => getUsers() , [])
  

  
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
          <Route path="/home" element={<Home userList={ users } />} />
            <Route path="/toDoApp" element={<ToDoApp />} />
            <Route path="/checkpoints" element={<Checkpoints />} />
            <Route path="/one2ones" element={<One2Ones />} />
          </Routes>
      </div>
    </>
      
    );
  }


export default App;