import React, { useState } from "react";
import './Login.css';
import { variables } from "./Variables";
import { useCookies } from "react-cookie";
import { useNavigate, NavLink } from 'react-router-dom';

export const Login = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]); // eslint-disable-line no-unused-vars
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = variables.API_URL + "Users/name/" + userName;
        const response = await fetch(url);
        const json = await response.json();

        if (json.length === 0) {
            alert("No User Found")
        } else {
            if (userName === json[0].username && password === json[0].password) {
                setCookie("user", userName, { path: "/" });
                navigate('/home');
            } else {
                alert("Login Incorrect")
            }
        }
        setUserName("")
        setPassword("")
    };

    return (
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Log In" />
                <NavLink to="/register">
                    Not a user? Register here!
                </NavLink>
            </form>
        </>
  )
}