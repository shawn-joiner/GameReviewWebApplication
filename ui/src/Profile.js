import React, { useEffect, useState } from "react";
import './Profile.css';
import { useParams } from "react-router-dom";
import { variables } from "./Variables";
import { useCookies } from "react-cookie";
import ReviewCard from './components/ReviewCard.js';
import { dateConvert } from "./Functions";
import { useNavigate } from 'react-router-dom';

export const Profile = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]); // eslint-disable-line no-unused-vars
    const { userName } = useParams();
    const [user, setUser] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [joined, setJoined] = useState([]);
    const [picture, setPicture] = useState([]);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await fetch(variables.API_URL + "Users/name/" + userName);
        const userJson = await response.json();
        setUser(userJson[0]);
        setJoined(dateConvert(userJson[0].joined));
        setPicture(userJson[0].picture);
        setPassword(userJson[0].password);
        setEmail(userJson[0].email);
        setBio(userJson[0].bio);

        const response2 = await fetch(variables.API_URL + "Reviews/user/" + userJson[0].id);
        const reviewsJson = await response2.json();
        console.log(reviewsJson)
        setReviews(reviewsJson);
    }
    
    useEffect(() => {
        fetchData()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(password);
        console.log(email);
        console.log(bio);
        if(!password || !email.toString() || !bio) {
            alert("Fields cannot be left empty")
        } else {
        const url = variables.API_URL + "Users";
        await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                "id": user.id,
                "password": password,
                "email": email,
                "bio": bio,
                "picture": user.picture,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fetchData();
    };
    };

    const imageUpload = async (e) => {
        e.preventDefault();

        const formData=new FormData();
        formData.append("file",e.target.files[0],e.target.files[0].name);

        fetch(variables.API_URL+'users/savefile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            user.picture = data;
            setPicture(data);
        })
    };

    const remove = async (e) => {
        e.preventDefault();

        if(window.confirm('Are you sure?')){
            fetch(variables.API_URL+'Users/'+ user.id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            .then(res=>res.json())
            removeCookie("user");
            navigate('/home');
        };
    };
    

    return (
        
        <>
            <div className="profile-container">
                {cookies["user"] === user.username ? <button type="button" className="btn btn-primary m-2 float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Edit</button> : ""}
                <img src={variables.PHOTO_URL + user.picture} className="profile-image" alt=""></img>
                    <p className="username">{user.username}</p>
                    <p className="email">{user.email}</p>
                    <p className="joined-date">Joined: {joined}</p>
                    <p className="bio">{user.bio}</p>
            </div>
            <div className="grid-container">
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
                        created={dateConvert(rev.created)}
                        className="reviewCard"
                    />
                ))}
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Change Profile Information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>

                        <div className="modal-body">
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 w-50 bd-highlight">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Password</span>
                                        <input type="text" className="form-control" defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>

                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Email</span>
                                        <input type="email" className="form-control" defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>

                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Bio</span>
                                        <input type="text" className="form-control" defaultValue={bio} onChange={(e) => setBio(e.target.value)}/>
                                    </div>

                                </div>

                                <div className="p-2 w-50 bd-highlight">
                                    <img width="250px" height="250px" src={variables.PHOTO_URL + picture} alt=""/>
                                    <input className="m-2" type="file" onChange={imageUpload}/>
                                </div>
                            </div>

                            <button type="button" className="btn btn-primary float-start" onClick={remove} data-bs-dismiss="modal"  aria-label="Close">Delete</button>
                            <button type="button" className="btn btn-primary float-end" onClick={handleSubmit} data-bs-dismiss="modal"  aria-label="Close">Update</button>
                        </div>
                    </div>
                </div> 
            </div>
        </>
        
    )
}