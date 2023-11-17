import { Link } from "react-router-dom";
import "./ReviewCard.css";

const ReviewCard = (props) => {
  let review = props.review;
  let title = props.title;

  if (review.length > 150) {
    review = review.substring(0, 150)+"...";
  }

  if (title.length > 25) {
    title = title.substring(0,25) + "...";
  }

  return (
    <div className="ReviewCard">
      <Link to={`/reviewview/${props.id}`}> 
        <div id="review" key={props.id}>
                  <div id="reviewWords">
                    <div id="reviewTitle">
                      <h4>{title}</h4>
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
                  
                  <h6>{props.created}</h6>
        </div>
      </Link>
    </div>
  );
};

export default ReviewCard;