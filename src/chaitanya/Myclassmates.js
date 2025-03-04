import React from "react";
import { Card, Button } from "react-bootstrap";

const Myclassmates = ({ name, favoriteFood, favoriteColor, likes, handleLike }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Align to the top to bring the cards closer
        flexDirection: "column", // Arrange cards vertically
        gap: "20px", // Adds space between cards if there are more than one
        padding: "20px", // Padding to ensure the cards don't touch the edge
      }}
    >
      <div
        style={{
          padding: "10px", // Adjust padding to reduce the background size
          borderRadius: "15px", // Rounded corners for the background
        }}
      >
        <Card
          style={{
            width: "26rem",
            padding: "20px",
            textAlign: "center",
            borderRadius: "15px",
            backgroundColor: "#ffffff", // White background for the card
            fontFamily: "Arial, sans-serif",
            fontStyle: "italic",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Darker shadow for depth
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "black", // Bold blue title
                fontStyle: "italic",
              }}
            >
              {name}
            </Card.Title>

            <Card.Text style={{ fontSize: "1.2rem", color: "#333", fontStyle: "italic" }}>
              <strong>Favorite Food:</strong> {favoriteFood}
            </Card.Text>

            <Card.Text style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
              <strong>Favorite Color:</strong> 
              <span style={{ color: favoriteColor }}> {favoriteColor} 🎨</span>
            </Card.Text>

            {/* Like Button and Display Likes */}
            <div style={{ marginTop: "15px", display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  background: "linear-gradient(90deg, #FF4B5C, #FF6B81)", // Red gradient
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  padding: "12px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0px 5px 15px rgba(255, 75, 92, 0.4)",
                  transition: "transform 0.2s ease-in-out",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={handleLike}
              >
                ❤️ {likes}
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Myclassmates;
