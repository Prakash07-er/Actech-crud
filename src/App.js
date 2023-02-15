import "./App.css";
import AddData from "./components/addData";
import { Routes,  Route, useNavigate} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import ViewData from "./components/ViewData";

function App() {

  return (<>
    <Navbar />
    <div className="container-md">
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/add-data" element={<AddData />} />
         <Route path="/update-data/:id" element={<AddData />} />
         <Route path="/view-data/:id" element={<ViewData />} />
      </Routes>
    </div>
    </>
  );
}

export default App;