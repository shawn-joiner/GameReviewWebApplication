import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { variables } from "../Variables";
import "./ReviewView.css";

export const ReviewView = (props) => {
    const { reviewId } = useParams();
    /* const [game, setGame] = useState([]); */
    const [reviews, setReviews] = useState([]); 

    const fetchReviews = async () => {
        const url = variables.API_URL + "Reviews/" + reviewId;
        const response = await fetch(url);
        const json = await response.json();
        setReviews(json[0]);
    };
    {/*
  const fetchReviews = async () => {
      const url = variables.API_URL + "Reviews/getByGame/" + gameId;
      const response = await fetch(url);
      const json = await response.json();
      setReviews(json);
  };
*/}
    useEffect(() => {
        /*fetchGame(); */
          fetchReviews(); 
    }, []);

    return (
        <div id='view-grid'>
            {/* <div id='view-img'>
                <img class="resize" src={variables.PHOTO_URL + game.image} />
            </div> */}


            <div id="view-words">
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
                    <h7 class="date">Date Created: {reviews.created}</h7>
                </div>
            </div>
        </div>
    )
}