import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router'


const UpdateData = () => {
    const {id}=useParams();
    const navigate = useNavigate('')
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")

  const updateData = async (e) => {
    e.preventDefault();
    const response = await axios.put(`http://localhost:5000/api/update-catalog/${id}`, {
       description, category, brand, price
    });
    navigate('/')
    console.log("response", response.data);
  };

  return ( 
    <div class="container-md-6">
        <h3>Add Catalog data</h3>
        <form onSubmit={updateData}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Description</label>
                <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Category</label>
                <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Brand</label>
                <input type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Price</label>
                <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
            </form>
    </div>
  )
}

export default UpdateData