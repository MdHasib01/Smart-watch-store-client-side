import React from "react";
import { Col, Card } from "react-bootstrap";
import { useHistory } from "react-router";

const Watch = (props) => {
  const { _id, img, brand, detais, price } = props.product;
  const history = useHistory();

  const handleBuyNow = () => {
    history.push(`/details/${_id}`);
  };
  return (
    <div>
      <Col>
        <Card>
          <Card.Img height="250px" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{brand}</Card.Title>
            <Card.Text>$ {price}</Card.Text>
            <Card.Text>{detais}</Card.Text>
            <button onClick={handleBuyNow}>Buy Now</button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Watch;
