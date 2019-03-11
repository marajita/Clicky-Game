import React from "react";
import "./AnimeCard.css";

//pass the image into each card so all 14 are rendered
 const AnimeCard = props => (
    <div className="card" onClick={props.imageClick}>
      <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
      </div>
    </div>
  
) 
export default AnimeCard;
