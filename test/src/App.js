import Navigation from "./Components/Navigation";
import ToDoApp from "./Pages/ToDoApp";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Checkpoints from "./Pages/Checkpoints";
import One2Ones from "./Pages/One2Ones";
import Error from "./Components/Error";

const App = () => {
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
          <Route path="/home" element={<Home />} />
          <Route path="/toDoApp" element={<ToDoApp />} />
          <Route path="/checkpoints" element={<Checkpoints />} />
          <Route path="/one2ones" element={<One2Ones />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
