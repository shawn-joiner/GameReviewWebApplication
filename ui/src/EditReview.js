import React, { useEffect, useState } from "react";
import { variables } from "./Variables";
import './CreateReview.css';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export const EditReview = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [user, setUser] = useState("");
    const [games, setGames] = useState("");
    const { reviewId } = useParams();

    const [gameId, setGameId] = useState(1);
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const [gameplay, setGameplay] = useState(1);
    const [presentation, setPresentation] = useState(1);
    const [engagement, setEngagement] = useState(1);
    const [difficulty, setDifficulty] = useState(1);
    const [replayable, setReplayable] = useState(1);

    const [input, setInput] = useState([]);

    const navigate = useNavigate();

    const fetchData = async () => {

        const response = await fetch(variables.API_URL + "Reviews/" + reviewId)
        const reviewJson = await response.json();
        setInput(reviewJson[0]);
        console.log(input);

        const response2 = await fetch(variables.API_URL + "Games/" + reviewJson[0].game_Id);
        const gamesJson = await response2.json();
        console.log(gamesJson)
        setGames(gamesJson);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = variables.API_URL + "Reviews";
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                "title": input.title,
                "review": input.review,
                "gameplay": input.gameplay,
                "presentation": input.presentation,
                "engagement": input.engagement,
                "difficulty": input.difficulty,
                "replayable": input.replayable,
                "id": reviewId,

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        navigate('/reviewbrowse')
    };

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <form className="review-form" onSubmit={handleSubmit}>
                <label htmlFor="game">Game:</label>

                <select value={input.gameId} onChange={(e) => {
                    console.log(e.target.value)
                    setGameId(e.target.value)
                }
                }>
                    {games != "" ? games.map((game) => {
                        return <option value={game.id} > {game.title} </option>
                    }) : ""}
                </select>
                {console.log(input.title)}
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    defaultValue={input.title}
                    onChange={(e) => input.title = e.target.value}
                />
                <label htmlFor="review">Review:</label>
                <textarea 
                    type="text"
                    id="review-input"
                    defaultValue={input.review}
                    onChange={(e) => input.review = e.target.value}
                />
                <label htmlFor="gameplay">Gameplay:</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="username"
                    defaultValue={input.gameplay}
                    onChange={(e) => input.gameplay = e.target.value}
                />
                <label htmlFor="presentation">Presentation:</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="presentation"
                    defaultValue={input.presentation}
                    onChange={(e) => input.presentation = e.target.value}
                />
                <label htmlFor="engagement">Engagement:</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="engagement"
                    defaultValue={input.engagement}
                    onChange={(e) => input.engagement = e.target.value}
                />
                <label htmlFor="difficulty">Difficulty:</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="difficulty"
                    defaultValue={input.difficulty}
                    onChange={(e) => input.difficulty = e.target.value}
                />
                <label htmlFor="replayable">Replayable:</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="replayable"
                    defaultValue={input.replayable}
                    onChange={(e) => input.replayable = e.target.value}
                />
                <input type="submit" value="Edit Review" />
            </form>
        </>
    )
}