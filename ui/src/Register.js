import React, { useEffect, useState } from "react";
import { variables } from "./Variables";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import './Register.css';

export const Register = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState([]);
    const [email, setEmail] = useState([]);
    const [bio, setBio] = useState([]);
    const [password, setPassword] = useState([]);

    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await fetch(variables.API_URL + "Users/" );
        const usersJson = await response.json();
        console.log(usersJson.map((x) => x.username))
        setUsers(usersJson.map((x)=> x.username));
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault()

        const url = variables.API_URL + "Users";
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "username": userName,
                "password": password,
                "email": email,
                "bio": bio,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        setCookie("user", userName, { path: "/" });
        navigate('/home');
    };

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <form className="register-form" onSubmit={handleSubmit}>
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
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="bio">Bio:</label>
                <textarea
                    type="text"
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                {users.includes(userName) ? <p>Username is already in use</p> : <input type="submit" value="Register" /> }
                
            </form>
        </>
    )
}