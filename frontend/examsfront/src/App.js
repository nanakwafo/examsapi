// import logo from './logo.svg';
// import logo from './logo.svg';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home"
import Register from "./pages/register"
import Filmmaker from "./pages/filmmaker"
function App() {
  return (
    <BrowserRouter>
         <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/filmaker" element={<Filmmaker/>}/>
            
          </Routes>
         </main>
    </BrowserRouter>
   
  );
}

export default App;
