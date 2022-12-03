import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardInfo } from "../data";

const SingleCard = () => {
  return (
    <div className="cardContainer container">
      {CardInfo.map((card) => (
        <Card key={card.id}>
          <Card.Img className="cardImg" variant="top" src={card.img} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.desc}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default SingleCard;
