import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ShoeCard from "./Components/Shoes/ShoeCard/ShoeCard";
import Shoes from "./Components/Shoes/Shoes";

function App() {
  return <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shoes/>}></Route>
      <Route path='/:id' element={<ShoeCard/>}></Route>
    </Routes>
    </div>;
}

export default App;
