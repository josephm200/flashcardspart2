import "./card.css";
import "./flip-transition.css";

function Card({onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">Clark Kent</div>
      <div className="card-front">Superman</div>
    </div>
  );
}

export default Card;
