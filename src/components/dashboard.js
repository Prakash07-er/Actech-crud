import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import Price from '../price'
import { useNavigate, useParams} from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
  
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/api/read-catalog");
      setData(response.data.Data);
    };
    
    useEffect(() => {
      getData();
    }, []);

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:5000/api/delete-catalog/${id}`);
        window.location.reload(false)
    };
    const addData = async () => {
        navigate('/add-data')
    };

    const updateData = async (id) => {
      navigate(`/update-data/${id}`)
    };

  return (
    <div class="container-md">
    <div className='text-center' style={{padding: "20px 20px"}}>
      <button type="submit" className="btn btn-primary" onClick={addData}>Add Data</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Code</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Brand</th>
          <th scope="col">Price</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          data.length? data.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{item.name} </th>
              <td>{item.code}</td>
              <td>{item.description.length> 15 ? item.description.substring(0, 9) + "..." : item.description}</td>
              <td>{item.category}</td>
              <td>{item.brand}</td>
              <td><Price priceData={item.price} /></td>
              <td><button type="button" class="btn btn-primary btn-sm" onClick={()=>updateData(item._id)}> Edit </button></td>
              <td><button type="button" class="btn btn-primary btn-sm" onClick={()=>deleteData(item._id)}> Delete </button></td>
            </tr>
          );
        }) :"loading..." }
      </tbody>
    </table>
    <button type="button" class="btn btn-primary" onClick={getData}> Refresh </button>
  </div>
  )
}

export default Dashboard