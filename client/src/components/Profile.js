import {React, useEffect, useState} from 'react'
import { toast } from "react-hot-toast";
import ModalUpdate from './ModalUpdate';
import Navbar from './Navbar';
import "../css/profile.css"


const Profile = () => {
    const [userData, setUserData] = useState({});
    const [blogs, setBlogs] = useState([]);
  

    useEffect(()=>{
        const getProfile = async ()=>{
            const response = await fetch("http://localhost:4000/api/user/profile", {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem("token")
                    },
                })
                const data = await response.json();
                if(data.success){
                    setUserData(data.userDoc);
                    setBlogs(data.blogs);
                }
                else{
                    toast.error("Something went wrong. Please login again");
                }
        }
        getProfile();
    }, []);
    const handleDelete = async (id)=>{
        const response = await fetch(`http://localhost:4000/api/blog/delete/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        })
        const data = await response.json();
        if(data.success){
            toast.success("Blog is deleted successfully");
            window.location.reload();
        }
        else{
            toast.error("Something went wrong. Please login again");
        }
    }

  return (

    <div>
    <Navbar/>
    

      <div className="profile-container">
        <ModalUpdate></ModalUpdate>
      <div className="profile-details">
        <h1>{userData.name}'s Profile</h1>
        <p>Email: {userData.email}</p>
      </div>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <div className="blog-options">
              <button onClick={()=>{handleDelete(blog._id)}}>Delete</button>
              {/* Add update functionality here */}
              <button style={{backgroundColor: "green"}} >Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  )
}

export default Profile