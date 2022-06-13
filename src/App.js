import "./App.css";
import UserData from "./components/UserData";
import { Route, Routes } from "react-router-dom";
import SingleUser from "./components/SingleUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserData />}></Route>
        <Route path="/users/:id" element={<SingleUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
