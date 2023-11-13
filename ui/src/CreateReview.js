import React, { useEffect, useState } from "react";
import { variables } from "./Variables";
import './CreateReview.css';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

export const CreateReview = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [user, setUser] = useState("");
    const [games, setGames] = useState("");

    const [gameId, setGameId] = useState(1);
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const [gameplay, setGameplay] = useState(1);
    const [presentation, setPresentation] = useState(1);
    const [engagement, setEngagement] = useState(1);
    const [difficulty, setDifficulty] = useState(1);
    const [replayable, setReplayable] = useState(1);

    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await fetch(variables.API_URL + "Users/name/" + JSON.stringify(cookies["user"]).replaceAll('"', ""));
        const userJson = await response.json();
        console.log(userJson)
        setUser(userJson[0]);

        const response2 = await fetch(variables.API_URL + "Games");
        const gamesJson = await response2.json();
        console.log(gamesJson)
        setGames(gamesJson);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = variables.API_URL + "Reviews";
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "game_id": gameId,
                "appUser_id": user.id,
                "title": title,
                "review": review,
                "gameplay": gameplay,
                "presentation": presentation,
                "engagement": engagement,
                "difficulty": difficulty,
                "replayable": replayable,
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

                <select value={gameId} onChange={(e) => {
                    console.log(e.target.value)
                    setGameId(e.target.value)
                }
                }>
                    {games != "" ? games.map((game) => {
                        return <option value={game.id} > {game.title} </option>
                    }) : ""}
                </select>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="review">Review:</label>
                <textarea 
                    type="text"
                    id="review-input"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <label htmlFor="gameplay">Gameplay:</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="username"
                    value={gameplay}
                    onChange={(e) => setGameplay(e.target.value)}
                />
                <label htmlFor="presentation">Presentation:</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="presentation"
                    value={presentation}
                    onChange={(e) => setPresentation(e.target.value)}
                />
                <label htmlFor="engagement">Engagement:</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="engagement"
                    value={engagement}
                    onChange={(e) => setEngagement(e.target.value)}
                />
                <label htmlFor="difficulty">Difficulty:</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                />
                <label htmlFor="replayable">Replayable:</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    id="replayable"
                    value={replayable}
                    onChange={(e) => setReplayable(e.target.value)}
                />
                <input type="submit" value="Create Review" />
            </form>
        </>
    )
}