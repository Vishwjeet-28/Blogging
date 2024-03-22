import {React, useEffect, useState} from 'react'
import { toast } from "react-hot-toast";
import "../css/profile.css"
import NavBar from './Navbar';
import Footer from './Footer';
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

    const handleUpdateBlog = (title, description, id)=>{
        
    }
    const handleDelete = async (id)=>{
        
    }

  return (

    <div>
        <NavBar></NavBar>
        <div className="profile-container"style={{minHeight: "100vh"}} >
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
              <button style={{backgroundColor: "green"}} onClick={()=> handleUpdateBlog(blog.title, blog.description, blog._id)} >Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Profile;