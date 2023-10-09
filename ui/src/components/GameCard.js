import React, { Component } from "react";
import { variables } from "../Variables.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./GameCard.css";

const GameCard = (props) => {
  return (
    <div className="GameCard">
      <Link to={`/gameview/${props.id}`}>
        <div id="game" key={props.id}>
          <img src={variables.PHOTO_URL + props.image}/>
          <h4>{props.title}</h4>
          <h5>{props.developer}</h5>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;