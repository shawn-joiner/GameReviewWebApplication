import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { variables } from "../Variables";
import ReviewCard from "./ReviewCard.js"
import { dateConvert } from "../Functions";
import "./GameView.css";

export const GameView = (props) => {
  const { gameId } = useParams();
  const [game, setGame] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [release, setRelease] = useState([]);
  
  const fetchGame = async () => {
      const url = variables.API_URL + "Games/" + gameId;
      const response = await fetch(url);
      const json = await response.json();
      setGame(json[0]);
      setRelease(dateConvert(json[0].release));
  };

  const fetchReviews = async () => {
      const url = variables.API_URL + "Reviews/game/" + gameId;
      const response = await fetch(url);
      const json = await response.json();
      setReviews(json);
  };

  useEffect(() => {
      fetchGame();
      fetchReviews();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

        return(
            <div>
            <div id = 'game-grid'>
                <div id = 'game-img'>
                    <img class="resize" src={variables.PHOTO_URL + game.image} alt="" />
                </div>

                <div id = "game-words">
                    <div id = 'game-blurb'>
                        <br />
                        <p class = "paragraph">{game.blurb}</p>
                    </div>
                    <div id = 'game-dev'>
                        <br />
                        <h3 class = "header">Developer</h3>
                        <p class = "paragraph">{game.developer}</p>
                    </div>
                    <div id = 'game-publisher'>
                        <br />
                        <h3 class = "header">Publisher</h3>
                        <p class = "paragraph">{game.publisher}</p>
                    </div>
                    <div id = 'game-date'>
                        <br />
                        <h3 class = "header">Release Date</h3>
                        <p class = "paragraph">{release}</p>
                    </div>
                </div>             
            </div>
            <div id = 'review-preview'>
                {reviews.map(rev => (
                    <ReviewCard
                        key = {rev.id}
                        id = {rev.id}
                        title = {rev.title}
                        review = {rev.review}
                        gameplay = {rev.gameplay}
                        presentation = {rev.presentation}
                        engagement = {rev.engagement}
                        difficulty = {rev.difficulty}
                        replayable = {rev.replayable}
                        created = {dateConvert(rev.created)}
                    />
                ))}
            </div>
            </div>
        )
}