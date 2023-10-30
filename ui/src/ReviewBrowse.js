import React,{Component} from 'react';
import { variables } from './Variables.js';
import { Link } from "react-router-dom";
import ReviewCard from './components/ReviewCard.js';
<<<<<<< Updated upstream
//import "./ReviewBrowse.css";
=======
import "./ReviewBrowse.css";
>>>>>>> Stashed changes

export class ReviewBrowse extends Component{

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(variables.API_URL + 'reviews')
        .then(response => response.json())
        .then((json) => {
            this.setState({
                reviews: json
            })
        });
    }
    render(){

        const {
            reviews
        }=this.state;
        return (
            <div id = "view-browse">
                <div id = 'review-preview'>
                {reviews.map(rev => (
                    <ReviewCard
                        key={rev.id}
                        id={rev.id}
                        title={rev.title}
                        review={rev.review}
                        gameplay={rev.gameplay}
                        presentation={rev.presentation}
                        engagement={rev.engagement}
                        difficulty={rev.difficulty}
                        replayable={rev.replayable}
                        created={rev.created}
                    />
                ))}
                </div>
            </div>
        )
    }
}