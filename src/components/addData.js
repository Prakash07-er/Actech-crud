import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddData = () => {
  const navigate = useNavigate("");
  const { id } = useParams();
  const [error, setError] = useState('')
  //Update data if URL has id
  const [uniqueData, setUniqueData] = useState({
    code: "",
    name: "",
    description: "",
    category: "",
    brand: "",
    price: "",
  });

  //Add data if URL doesn't have id
  const [data, setData] = useState({
    code: "",
    name: "",
    description: "",
    category: "",
    brand: "",
    price: "",
  });

  const updateData = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `http://localhost:5000/api/update-catalog/${id}`,
      (data, uniqueData)
    );
    console.log(response.data.updatedData);
    navigate("/");
  };

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

  // console.log("uniqueData", uniqueData)

  const addData = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/api/create-catalog",
        data
      );
      console.log(response.data.msg)
      navigate("/");
    } catch (error) {
      console.log(error.response)
      setError(error.response.data) 
    }
    // console.log(error)
  };

  const editData = (e) => {
    setUniqueData({...uniqueData, [e.target.name]:e.target.value})
  }

  return (
    <div className="container-md-6">
      <h3>{id ? "Update Catelog data" : "Add Catalog data"}</h3>
      <form onSubmit={id ? updateData : addData}>
        <div className="mb-3">
          <label className="form-label">Code</label>
          <input
            type="text"
            name="code"
            className="form-control"
            value={id ? uniqueData?.code : data.code}
            onChange={(e) =>
              id
                ? editData(e)
                : setData({ ...data, code: e.target.value })
            }
          />
        {/* {error.code ? (<div style={{color:"red"}}> *{error}</div>) : ''} */}
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={id ? uniqueData?.name : data.name}
            onChange={(e) =>
              id
                ? editData(e)
                : setData({ ...data, name: e.target.value })
            }
          />
          {/* {error.name ? (<div style={{color:"red"}}> *{error}</div>) : ''} */}
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={id ? uniqueData?.description : data.description}
            onChange={(e) =>
              id
                ? editData(e)
                : setData({ ...data, description: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={id ? uniqueData?.category : data.category}
            onChange={(e) =>
              id
                ? editData(e)
                : setData({ ...data, category: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input
            type="text"
            name="brand"
            className="form-control"
            value={id ? uniqueData?.brand : data.brand}
            onChange={(e) =>
              id
                ? editData(e)
                : setData({ ...data, brand: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={id ? uniqueData?.price : data.price}
            onChange={(e) =>
              id
                ? editData(e)
                : setData({ ...data, price: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddData;