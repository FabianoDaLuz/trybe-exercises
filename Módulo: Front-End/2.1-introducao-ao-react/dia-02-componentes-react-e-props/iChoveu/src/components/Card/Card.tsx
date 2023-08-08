import { ForecastType } from "../../Data/forecast";
type CardProps = {
  forecast: ForecastType;
};

// import "Card.css";
import * as React from "react";

function Card(props: CardProps) {
  const { forecast } = props;
  const { date, image, temp, weather, weekday } = forecast;

  return (
    <div className="card_item">
      <h2 className="weekday">{weekday}</h2>
      <h2 className="date">{date}</h2>
      {image && <img src={image} alt={`${weather} icon`} />}
      <h2 className="temperature">{temp}</h2>
      <h2 className="weather">{weather}</h2>
    </div>
  );
}

export default Card;
