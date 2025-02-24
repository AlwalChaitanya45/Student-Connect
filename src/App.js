import React from "react";
import Myclassmates from "./chaitanya/Myclassmates";
import { Container, Row, Col } from "react-bootstrap";

const People = [
  { name: "Chaitanya", favoriteFood: "Pizza", favoriteColor: "Blue" },
  { name: "Varun", favoriteFood: "Biryani", favoriteColor: "Black" },
  { name: "Shiva", favoriteFood: "Ice Cream", favoriteColor: "Pink" },
  { name: "Karthi", favoriteFood: "Mandi", favoriteColor: "Yellow" },
  { name: "Thousif", favoriteFood: "Haleem", favoriteColor: "Green" },
  { name: "Sarika", favoriteFood: "Chicken Biryani", favoriteColor: "Red" },
  { name: "Krusi", favoriteFood: "Paneer Majestic", favoriteColor: "Blue" },
];

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1E3C72, #2A5298)", // Blue gradient background
        minHeight: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        padding: "20px", // Padding for better spacing
      }}
    >
      <Container style={{ padding: "20px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.8rem",
            fontWeight: "bold",
            textShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)", // Darker shadow for the title
            color: "#FFD700", // Gold color to make the title pop
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          My Classmates
        </h1>
        <Row className="justify-content-center">
          {People.map((person, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Myclassmates {...person} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
