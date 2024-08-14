import  { useState } from "react";
import axiosClient from "../../axiosClient";
import { useNavigate } from "react-router-dom";

function CreateItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const backToList = () =>{
    navigate('/items');
  }

  const handleCreateitem = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name',name);
    formData.append('description',description);
    if (image) {
      formData.append('image_path',image);
    }

    console.log("post Data", formData);

    axiosClient.post("/items", formData).then(({ response }) => {
      console.log("response ::", response);
      const successData = {
        successType: true,
        successMessage: "Item Created Successfully.",
      };
      navigate("/", { state: successData });
    });
  };

  return (
    <div className="login-signup-form animated fadeinDown">
      <div className="form">
        <h1 className="title">Create a New Item</h1>
        <form onSubmit={handleCreateitem}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description:</label>
          <input
            type="text"
            placeholder="Enter the description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Image:</label>
          <input
            type="file"
            placeholder="Browse image"
            onChange={(e) => setImage(e.target.files[0])}
          /><button className="btn btn-block" onClick={backToList}>Cancel</button> &nbsp;
          <button className="btn btn-block">Create Item</button>
        </form>
      </div>
    </div>
  );
}

export default CreateItem;
