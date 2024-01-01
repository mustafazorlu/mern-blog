import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
    const { setUserInfo } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const login = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            return;
        }

        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });
        console.log(response);
        if (response.ok) {
            response.json().then((info) => {
                setUserInfo(info);
                setRedirect(true);
            });
        } else {
            alert("wrong username or password");
        }
    };
    if (redirect) {
        return <Navigate to={"/"} />;
    }
    return (
        <form className="login" onSubmit={login}>
            <h1 className="font-medium text-4xl mb-10">Login</h1>
            <input
                className="border-black border-2 mb-3"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="border-black border-2 mb-3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-black text-white">Login</button>
        </form>
    );
};

export default Login;
