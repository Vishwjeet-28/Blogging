import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {Link } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isProfilePage, setIsProfilePage] = useState(location.pathname === '/profile');
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") !== null);

    const handleProfile = () => {
        navigate("/profile");
        setIsProfilePage(true);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login");
        toast.success("Logged out successfully");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand" style={{ fontWeight: "bold", color: "#e50914", paddingTop: "20px" }}>Blogging</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active">About</button>
                        </li>
                    </ul>
                    {isLoggedIn ? (
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success me-2" type="submit">Search</button>
                            {isProfilePage ? (
                                <button className="btn btn-outline-success" onClick={handleLogout}>Logout</button>
                            ) : (
                                <button className="btn btn-outline-success" onClick={handleProfile}>Profile</button>
                            )}
                        </form>
                    ) : (
                        <form className="d-flex">
                            <Link className="btn btn-outline-success me-2" to = "/login">Login</Link>
                            <Link className="btn btn-outline-success" to = "/register">Register</Link>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
