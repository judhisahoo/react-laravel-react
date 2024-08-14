import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { Link, useLocation } from "react-router-dom";

function ListsItems() {
  const cLocation = useLocation();
  const [items, setItems] = useState([]);
  const [loading, setLoadings] = useState(false);
  const messageData = cLocation.state;
  console.log('messageData ::',messageData);

  useEffect(() => {
    console.log("baseUrl ::", axiosClient);
    getItems();
  }, []);

  const getItems = () => {
    setLoadings(true);
    axiosClient
      .get("/items")
      .then(({ data }) => {
        console.log("data ::", data);
        setLoadings(false);
        setItems(data);
        const preStateObj={};
        history.replaceState(preStateObj);
      })
      .catch(({ error }) => {
        setLoadings(false);
      });
  };


  const deleteCurrect = (id) => {
    console.log('id ::',id);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>List Items</h1>
        <Link className="btn-add" to="/items/create">
          Add new item
        </Link>
      </div>
      {loading && <h5>Loading</h5>}
      {
        messageData && (
          <div className="alert">
            <p>{messageData.successMessage}</p>
          </div>
        )
      }
      <div className="card animated fadeInDown">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <img
                    src={`http://127.0.0.1:8000/storage/${item.image_path}`}
                    width={100}
                    alt="test"
                  />
                </td>
                <td>
                  <Link to={`/items/${item.id}`} className="btn-edit">
                    Edit
                  </Link>
                   &nbsp;
                   <Link onClick={deleteCurrect(item.id)} className="btn-edit">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListsItems;
