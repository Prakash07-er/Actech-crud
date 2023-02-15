import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ViewData = () => {
    const navigate = useNavigate()
    const [uniqueData, setUniqueData] = useState({})
    const {id} = useParams()

    const singleData = async () => {
        const response = await axios.get(
          `http://localhost:5000/api/single-catalog/${id}`
        );
        console.log("response", response.data.getSingleData)
        setUniqueData(response.data.getSingleData);
      };
      useEffect(() => {
        singleData();
      }, []);

      const backHandler = () => {
        navigate('/')
      }

  return (
    <div style={{padding:"30px 0"}}>
        <div style={{textAlign:"right", paddingBottom:"30px"}}>
            <button type="submit" className="btn btn-primary" onClick={() => backHandler()}>Back</button>
        </div>
        <div class="card">
            <h5 class="card-header">Product detail</h5>
            <div class="card-body">
                <p class="card-text"><span style={{fontWeight:"bold"}}> Name :</span> {uniqueData.name}</p>
                <p class="card-text"><span style={{fontWeight:"bold"}}> Code :</span> {uniqueData.code}</p>
                <p class="card-text"><span style={{fontWeight:"bold"}}> Description :</span> {uniqueData.description}</p>
                <p class="card-text"><span style={{fontWeight:"bold"}}> Category :</span> {uniqueData.category}</p>
                <p class="card-text"><span style={{fontWeight:"bold"}}> Brand :</span> {uniqueData.brand}</p>
                <p class="card-text"><span style={{fontWeight:"bold"}}> Price :</span> {uniqueData.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ViewData