import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const AddData = () => {
    const navigate = useNavigate('')
    const { id } = useParams();
    // const [code, setCode] = useState("")
    // const [name, setName] = useState("")
    // const [description, setDescription] = useState("")
    // const [category, setCategory] = useState("")
    // const [brand, setBrand] = useState("")
    // const [price, setPrice] = useState("")
    const [data, setData] = useState({ code: "", name: "", description: "", category: "", brand: "", price: "" });

    useEffect(() => {
        console.log(id);
    }, []);

    const updateData = async (e) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:5000/api/update-catalog/${id}`, data);
        navigate('/')
        console.log("response", response.data);

    };

    const addData = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/api/create-catalog", data);
        navigate('/')
        console.log("response", response.data);
    };

    return (
        <div class="container-md-6">
            <h3>{id ? "Update Catelog data" : "Add Catalog data"}</h3>
            <form onSubmit={id ? updateData : addData} >
                {id ? ""
                    : (<> <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Code</label>
                        <input type="text" className="form-control" value={data?.code} onChange={(e) => setData({ ...data, code: e.target.value })} />
                    </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Name</label>
                            <input type="text" className="form-control" value={data?.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                        </div></>)
                }
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Description</label>
                    <input type="text" className="form-control" value={data?.description} onChange={(e) => setData({ ...data, description: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Category</label>
                    <input type="text" className="form-control" value={data?.category} onChange={(e) => setData({ ...data, category: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Brand</label>
                    <input type="text" className="form-control" value={data?.brand} onChange={(e) => setData({ ...data, brand: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Price</label>
                    <input type="number" className="form-control" value={data?.price} onChange={(e) => setData({ ...data, price: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">{id ? "Update" : "Add"}</button>
            </form>
        </div>
    )
}

export default AddData