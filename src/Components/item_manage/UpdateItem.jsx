import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../axiosClient';

function UpdateItem() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [name, setName] = useState()
  const [existsname, setExistsname] = useState()
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [existingImage,setExistingimage] = useState();
  const [loadings,setLoadings] = useState(false);

  useEffect( ()=>{
    getItemDetails(id);
  },[id]);

  const getItemDetails = (id) =>{
    console.log('id',id);
    axiosClient.get(`/items/${id}`).then((response)=>{
      console.log('response::',response);
      setName(response.data.name);
      setExistsname(response.data.name)
      setDescription(response.data.description);
      setExistingimage(response.data.image_path);
      setLoadings(true);
    })
  }

  const backToList = () =>{
    navigate('/items');
  }

  const handleUdateItem = (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',name);
    formData.append('description',description)
    if(image){
      formData.append('image_path',image);
    }

    axiosClient.post(`/items/${id}?_method=PUT`,formData).then(response => {
      console.log('response ::',response);
      navigate("/");
    })
  }
  return (
    <>
    {!loadings && (
      <div className="text-center">
        Loading...
      </div>
    )}

    {loadings && (
         <div className="login-signup-form animated fadeinDown">
         <div className="form">
           <h1 className="title">Update Item {existsname}</h1>
           <form onSubmit={handleUdateItem}>
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
             />
             <img
                    src={`http://127.0.0.1:8000/storage/${existingImage}`}
                    width={50}
                    alt="test"
                  />
            <button className="btn btn-block" onClick={backToList}>Cancel</button> &nbsp;
             <button className="btn btn-block">Update Item</button>
           </form>
         </div>
       </div>
    )}
    </>
  )
}

export default UpdateItem