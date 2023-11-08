import React, { useEffect, useState } from "react";
import './Profile.css';
import { useParams } from "react-router-dom";
import { variables } from "./Variables";
import { useCookies } from "react-cookie";
import ReviewCard from './components/ReviewCard.js';

export const Profile = (props) => {
    const { userName } = useParams();
    const [user, setUser] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [reviews, setReviews] = useState([]);

    const fetchData = async () => {
        const response = await fetch(variables.API_URL + "Users/name/" + userName);
        const userJson = await response.json();
        setUser(userJson[0]);

        const response2 = await fetch(variables.API_URL + "Reviews/user/" + userJson[0].id);
        const reviewsJson = await response2.json();
        console.log(reviewsJson)
        setReviews(reviewsJson);
    }
    
    useEffect(() => {
        fetchData()
    }, []);

    return (
        
        <>
            <div className="profile-container">
                {JSON.stringify(cookies["user"]).replaceAll('"', "") === user.username ? <button className="edit-button">Edit</button> : ""}
                <img src={variables.PHOTO_URL + user.picture} className="profile-image" alt="User's Profile Picture"></img>
                    <p className="username">{user.username}</p>
                    <p className="email">{user.email}</p>
                    <p className="joined-date">Joined: {user.joined}</p>
                    <p className="bio">{user.bio}</p>
            </div>
            <di className="grid-container" v>
                {reviews.map(rev => (
                    <ReviewCard
                        key={rev.id}
                        id={rev.id}
                        title={rev.title}
                        review={rev.review}
                        gameplay={rev.gameplay}
                        presentation={rev.presentation}
                        engagement={rev.engagement}
                        difficulty={rev.difficulty}
                        replayable={rev.replayable}
                        created={rev.created}
                        className="reviewCard"
                    />
                ))}
            </di>
        </>
        
    )
}