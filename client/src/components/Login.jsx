import {React, useState} from 'react'
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import "../css/register.css";

const Login = ({Home})=>{
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({email: "", password: ""});
    const handleChange = (e)=>{
        setInputs({...inputs, [e.target.id]: e.target.value});
    }
    const handleSubmit = async()=>{
        const response = await fetch("http://localhost:4000/api/user/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        });
        if(!response){
            toast.error("Response is not ok");
        }
        else{
            const data = await response.json();
            if(data.success){
                toast.success("You are Logged in successfully");
                localStorage.setItem('token', data.token);
                navigate("/");
            }
            else{
                toast.error("Unable to login. Please try again later.")
            }
        }
    }
    return(
        <div className="register-body">
      <div className="register-container">
        <h1>Login</h1>
        <input onChange={handleChange} id="email" type="text" placeholder="Email"/>
        <input onChange={handleChange} id="password" type="password" placeholder="Password"/>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
    )
}
export default Login;