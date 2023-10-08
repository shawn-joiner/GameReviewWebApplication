import React,{Component} from 'react';
import { variables } from './Variables.js';
import { Link } from "react-router-dom";
import GameCard from './components/GameCard.js';
import "./GameBrowse.css";

export class GameBrowse extends Component{

    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }

    componentDidMount() {
        fetch(variables.API_URL + 'games')
        .then(response => response.json())
        .then((json) => {
            this.setState({
                games: json
            })
        });
    }
    render(){

        const {
            games
        }=this.state;
        return(
            <div id = 'game-preview'>
                {games.map(game => (
                    <GameCard
                        key = {game.id}
                        id = {game.id}
                        title = {game.title}
                        developer = {game.developer}
                        image = {game.image}
                    />
                ))}
            </div>
        )
    }
}