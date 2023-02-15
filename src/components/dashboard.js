import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import Price from "../price";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/read-catalog");
    setData(response.data.Data);
  };

  useEffect(() => {
    getData();
  }, [data]);

  const deleteData = async (id) => {
      await axios.delete(`http://localhost:5000/api/delete-catalog/${id}`);
      console.log("deleted")
  };
  
  const addData = async () => {
    navigate("/add-data");
  };

  const updateData = async (id) => {
    navigate(`/update-data/${id}`);
  };
  
  const viewData = async (id) => {
    navigate(`/view-data/${id}`);
  }

  return (
    <div className="container-md">
      <div className="text-center" style={{ padding: "20px 20px" }}>
        <button type="submit" className="btn btn-primary" onClick={addData}>
          Add Data
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">View</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length
            ? data.map((item, index) => {
                return (<>
                  <tr key={index}>
                    <th scope="row">{item.name} </th>
                    <td>{item.code}</td>
                    <td>
                      {item.description?.length > 15
                        ? item.description.substring(0, 9) + "..."
                        : item.description}
                    </td>
                    <td>{item.category}</td>
                    <td>{item.brand}</td>
                    <td>
                      <Price priceData={item.price} />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => viewData(item._id)}
                      > 
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => updateData(item._id)}
                      > 
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel" style={{color:"red"}}>
                            Delete Action!
                          </h5>
                        </div>
                        <div className="modal-body" style={{color:"red"}}> Are you sure want to delete the catalog data</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-danger" 
                          data-bs-dismiss="modal"
                          onClick={() => deleteData(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </>);
              })
            : "loading..."}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" onClick={getData}>
        Refresh
      </button>
     
    </div>
  );
};

export default Dashboard;