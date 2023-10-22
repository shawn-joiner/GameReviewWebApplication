import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { variables } from "./Variables";
import { useCookies } from "react-cookie";

export const Profile = (props) => {
    const { userName } = useParams();
    const [user, setUser] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [reviews, setReviews] = useState([]);

    const fetchUser = async () => {
        const url = variables.API_URL + "Users/name/" + userName;
        const response = await fetch(url);
        const json = await response.json();
        setUser(json[0]);
        return
    };

    const fetchReviews = async () => {
        const url2 = variables.API_URL + "Reviews/user/" + user.id;
        const response2 = await fetch(url2);
        const json2 = await response2.json();
        console.log(json2);
        setReviews(json2);
    };
    
    useEffect(() => {
        fetchUser()
    }, []);

    useEffect(() => {
        fetchReviews()
    }, [user]);

    

    return (
        
        <>
            <div>
                {JSON.stringify(cookies["user"]).replaceAll('"', "") === user.username ? <button>Edit</button> : ""}
                <img src={user.picture}></img>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.joined}</p>
                <p>{user.bio}</p>
            </div>
            <div>
                <p></p>
            </div>
        </>
        
    )
}