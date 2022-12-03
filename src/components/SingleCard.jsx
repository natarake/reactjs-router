import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleCard = ({ card }) => {
  return (
    <Card>
      <Card.Img className="cardImg" variant="top" src={card.img} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.desc}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
