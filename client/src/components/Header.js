import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch("http://localhost:4000/profile", {
            credentials: "include",
        })
            .then((response) => {
                response.json();
            })
            .then((userInfo) => {
                setUserInfo(userInfo);
            });
    }, []);

    const logout = () => {
        fetch("http://localhost:4000/logout", {
            credentials: "include",
            method: "POST",
        });
        setUserInfo(null);
    };

    const username = userInfo?.username;
    return (
        <header>
            <Link to="/" className="logo py-2 px-4 border-2 border-black">
                meanval
            </Link>
            <span className="font-medium underline">v0.2.1</span>
            {username && (
                <>
                    <Link to="/create" className="p-3 bg-black text-white" >Create new post</Link>
                    <a onClick={logout}>Logout</a>
                </>
            )}
            {!username && (
                <>
                    <nav>
                        <Link to="/login" className="p-3 bg-black text-white">
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="p-3 bg-black text-white"
                        >
                            Register
                        </Link>
                    </nav>
                </>
            )}
        </header>
    );
};

export default Header;
