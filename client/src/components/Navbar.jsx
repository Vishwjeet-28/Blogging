import React, { useState, useEffect,useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Link } from "react-router-dom";
import ModalCreate from './ModalCreate';

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isProfilePage, setIsProfilePage] = useState(location.pathname === '/profile');
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") !== null);

    const ref = useRef(null);
    const refClose = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken.exp < Date.now() / 1000) {
                // Token expired, clear localStorage and set logged out
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                navigate("/login");
                toast.error("Session expired. Please log in again.");
            }
        } else {
            setIsLoggedIn(false);
        }
    }, [navigate]);

    const decodeToken = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
            return {};
        }
    };

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
        <>
        <ModalCreate ref1 = {ref} refClose1 = {refClose}></ModalCreate>
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
                    {isLoggedIn && !isProfilePage ? (
                            <>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <button class="btn btn-outline-danger" type="submit" onClick={() => ref.current.click()}>Create Blog</button>
                                    </li>
                                </ul>
                            </>
                        ) : null}
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger me-2" type="submit">Search</button>
                            {isProfilePage ? (
                                <button class="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                            ) : (
                                <button class="btn btn-outline-danger" onClick={handleProfile}>Profile</button>
                            )}
                        </form>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;
