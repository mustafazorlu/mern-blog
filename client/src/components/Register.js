import { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();

        if(!username || !password){
            return
        }

        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok === false) {
            alert("registration failed");
        } else {
            alert("registration success");
        }
    };

    return (
        <form className="register" onSubmit={register}>
            <h1 className="font-medium text-4xl mb-10">Register</h1>
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
            <button className="bg-black text-white">Register</button>
        </form>
    );
};

export default Register;
