import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import profile1 from "../assets/profile1.jpg";

function SpiceCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={profile1} />
        <Card.Body>
          <Card.Title>Turmeric Powder</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/1227198304/photo/colourful-background-from-various-herbs-and-spices-for-cooking-in-bowls.jpg?s=612x612&w=0&k=20&c=OtzOlSOjQ0a9giYM0FKyRJqIsIvWguEZv9pCzjKs5vo="
        />
        <Card.Body>
          <Card.Title>Turmeric Powder</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SpiceCard;
