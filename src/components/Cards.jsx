import SingleCard from "./SingleCard";
import { CardInfo } from "../data.js";

const Cards = () => {
  return (
    <div>
      <SingleCard CardInfo={CardInfo} />
    </div>
  );
};

export default Cards;
