import React,{Component} from 'react';
import { variables } from './Variables.js';
import ReviewCard from './components/ReviewCard.js';
import "./ReviewBrowse.css";
import { dateConvert } from "./Functions";


export class ReviewBrowse extends Component{

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    retrieve() {
        fetch(variables.API_URL + 'reviews')
        .then(response => response.json())
        .then((json) => {
            this.setState({
                reviews: json
            })
        });
    } 

    componentDidMount() {
        this.retrieve();
    }

    componentDidUpdate(prevProps, prevState)  {
        if(prevState.reviews.length !== this.state.reviews.length) {
            this.retrieve();
        }
    }
    
    render(){
        const {
            reviews
        }=this.state;
        return (
            <div id = "view-browse">
                <div id = 'review-preview'>
                {reviews.reverse().map(rev => (
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
                        created={dateConvert(rev.created)}
                    />
                ))}
                </div>
            </div>
        )
    }
}