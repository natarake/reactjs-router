import SingleCard from "./SingleCard";
import { CardInfo } from "../data.js";

const Cards = () => {
  return (
    <div className="cardContainer container">
      {CardInfo.map((card) => (
        <SingleCard card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
