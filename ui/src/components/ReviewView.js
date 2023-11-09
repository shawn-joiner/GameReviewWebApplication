import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { variables } from "../Variables";
import { dateConvert } from "../Functions";
import "./ReviewView.css";

export const ReviewView = (props) => {
    const { reviewId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [game, setGame] = useState([]);
    const [author, setAuthor] = useState([]);
    const [date, setDate] = useState([]);

    const fetchData = async () => {
        let reviewResponse = await fetch(variables.API_URL + "Reviews/" + reviewId);
        const review = await reviewResponse.json();
        setReviews(review[0]);

        let gameResponse = await fetch(variables.API_URL + "Games/" + review[0].game_Id);
        const game = await gameResponse.json();
        setGame(game[0]);

        let authorResponse = await fetch(variables.API_URL + "Users/" + review[0].appUser_Id);
        const author = await authorResponse.json();
        setAuthor(author[0]);

        setDate(dateConvert(review[0].created));
    };
  

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div id='view-grid'>
            <div id="view-words">
                <div id='game-title'>
                    <h2>Review For: {game.title}</h2>
                </div>
                <div id='author'>
                    <h4>Written By: {author.username}</h4>
                </div>
                <div id='view-title'>
                    <br />
                    <h3 class="header">Review Title: {reviews.title}</h3>
                </div>
                <div id='view-review'>
                    <br />
                    <p class="paragraph">{reviews.review}</p>
                </div>
                <div id='view-score'>
                    <h5 class="score">Gameplay: {reviews.gameplay} | Presentation: {reviews.presentation}</h5>
                </div>
                <div id='view-score'>
                    <h5 class="score">Engagement: {reviews.engagement} | Difficulty: {reviews.difficulty}</h5>
                </div>
                <div id='view-score'>
                    <h5 class="score">Replayable: {reviews.replayable}</h5>
                </div>
                <div id='view-date'>
                    <h7 class="date">Date Created: {date}</h7>
                </div>
            </div>
        </div>
    )
}