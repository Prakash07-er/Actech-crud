
import "./App.css";
import AddData from "./components/addData";
import { Routes,  Route, useNavigate} from "react-router-dom";
import Dashboard from "./components/dashboard";
import UpdateData from "./components/update";
import Navbar from "./components/navbar";


function App() {

  return (<>
    <Navbar />
    <div class="container-md">
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/add-data" element={<AddData />} />
         <Route path="/update-data/:id" element={<AddData />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
