import "./App.css";
import { Route, Routes } from "react-router-dom";
import Filmmaker from "./pages/filmmaker";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Filmviewer from "./pages/filmviewer";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/filmmaker" element={<Filmmaker />} />
        <Route path="/filmviewer" element={<Filmviewer />} />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
