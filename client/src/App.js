import { Route, Routes } from "react-router-dom";
import AddUser from "./Component/AddUser";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import UpdateUser from "./Component/UpdateUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<AddUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
