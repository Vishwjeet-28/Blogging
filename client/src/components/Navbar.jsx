import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => {
        setShowDropdown(!showDropdown);
        navigate("/profile");
    };

    const handleEditProfile = () => {
        // Add logic for editing profile
    };

    const handleLogout = () => {
        // Add logic for logout
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: "0", margin: "0" }}>
            <div className="container-fluid">
                <p className="navbar-brand" style={{ fontWeight: "bold", color: "#e50914", paddingTop: "20px" }}>Blogging</p>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link active">Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active">About</button>
                        </li>
                    </ul>
                    {!showDropdown ? (
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success me-2" type="submit">Search</button>
                            <button className="btn btn-outline-success" onClick={handleClick}>Profile</button>
                        </form>
                    ) : (
                        <div className="dropdown">
                            <button className="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item" onClick={handleEditProfile}>Edit Profile</button>
                                <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
