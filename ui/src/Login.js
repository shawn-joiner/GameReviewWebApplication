import React, { useEffect, useState } from "react";
import { variables } from "./Variables";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
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
            <form onSubmit={handleSubmit }>
                <label>Username:</label>
                <input type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}></input>
                <label>Password:</label>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit" />
            </form>
            <button
                onClick={() => {
                    alert(`User cookie is ${JSON.stringify(cookies["user"])}`);
                }
                }
            >
                Show user cookie
            </button >
            <button
                onClick={() => {
                    removeCookie("user");
                }}
            >
                Delete user cookie
            </button>
        </>
  )
}