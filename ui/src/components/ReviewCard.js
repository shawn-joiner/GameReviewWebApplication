import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ReviewCard.css";

const ReviewCard = (props) => {
  return (
    <div className="ReviewCard">
      <Link to={`/reviewview/${props.id}`}> 
        <div id="review" key={props.id}>
                  <h3>{props.title}</h3>
                  <h5>{props.review}</h5>
                  <h5>Gameplay: {props.gameplay}</h5>
                  <h5>Presentation: {props.presentation}</h5>
                  <h5>Engagement: {props.engagement}</h5>
                  <h5>Difficulty: {props.difficulty}</h5>
                  <h5>Replayable: {props.replayable}</h5>
                  <h7>{props.created}</h7>
        </div>
      </Link>
    </div>
  );
};

export default ReviewCard;