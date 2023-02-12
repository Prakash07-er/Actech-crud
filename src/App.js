
import "./App.css";
import AddData from "./components/addData";
import { Routes,  Route, useNavigate} from "react-router-dom";
import Dashboard from "./components/dashboard";
import UpdateData from "./components/update";


function App() {

  // const updateData = async () => {
  //   const response = await axios.get("http://localhost:5000/api/update-catalog/:${id}");
  //   console.log("response", response.data.Data);
  //   setUpdateData(response.data.Data);
  // };

  return (
    <div class="container-md">
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/add-data" element={<AddData />} />
         <Route path="/update-data/:id" element={<AddData />} />
      </Routes>
    </div>
  );
}

export default App;
