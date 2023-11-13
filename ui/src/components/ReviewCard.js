import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ReviewCard.css";

const ReviewCard = (props) => {
  let review = props.review;

  if (review.length > 150) {
    review = review.substring(0, 150)+"...";
  }

  return (
    <div className="ReviewCard">
      <Link to={`/reviewview/${props.id}`}> 
        <div id="review" key={props.id}>
                  <div id="reviewWords">
                    <div id="reviewTitle">
                      <h4>{props.title}</h4>
                    </div>
                    <p>{review}</p>
                  </div>
                  <div id="stats">
                    <div>
                    <h6>Play</h6>
                    <h5>{props.gameplay}</h5>
                    </div>
                    <div>
                    <h6>Present</h6>
                    <h5>{props.presentation}</h5>
                    </div>
                    <div>
                    <h6>Engage</h6>
                    <h5>{props.engagement}</h5>
                    </div>
                    <div>
                    <h6>Diff</h6>
                    <h5>{props.difficulty}</h5>
                    </div>
                    <div>
                    <h6>Replay</h6>
                    <h5>{props.replayable}</h5>
                    </div>
                  </div>
                  
                  <h6>Created: {props.created}</h6>
        </div>
      </Link>
    </div>
  );
};

export default ReviewCard;