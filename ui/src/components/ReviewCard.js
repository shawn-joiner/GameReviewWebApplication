import React, { Component } from "react";
{/* import { variables } from "../Variables.js"; */ }
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ReviewCard.css";

const ReviewCard = (props) => {
  return (
    <div className="ReviewCard">
      <Link to={`/reviewview/${props.id}`}> 
        <div id="rev" key={props.id}>
          {/* <img src={variables.PHOTO_URL + props.image} /> */}
                  <h3>{props.title}</h3>
                  <h5>{props.gameplay}</h5>
                  <h5>{props.presentation}</h5>
                  <h5>{props.engagement}</h5>
                  <h5>{props.difficulty}</h5>
                  <h5>{props.replayable}</h5>
                  <h7>{props.created}</h7>
        </div>
      </Link>
    </div>
  );
};

export default ReviewCard;