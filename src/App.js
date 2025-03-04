import React, { useState } from "react";
import Myclassmates from "./chaitanya/Myclassmates";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

function App() {
  const [people, setPeople] = useState([
    { name: "Chaitanya", favoriteFood: "Pizza", favoriteColor: "Blue", likes: 0 },
    { name: "Sarika", favoriteFood: "Pav Bhaji", favoriteColor: "Red", likes: 0 },
    { name: "Varun", favoriteFood: "Chicken Biryani", favoriteColor: "Black", likes: 0 },
    { name: "Karthi", favoriteFood: "Mandi", favoriteColor: "Yellow", likes: 0 },
    { name: "Thousif", favoriteFood: "Haleem", favoriteColor: "Green", likes: 0 },
  ]);

  const [name, setName] = useState("");
  const [favoriteFood, setFavoriteFood] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    const person = people[index];
    setName(person.name);
    setFavoriteFood(person.favoriteFood);
    setFavoriteColor(person.favoriteColor);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  // Function to handle likes for profile cards
  const handleLike = (index) => {
    const updatedPeople = [...people];
    updatedPeople[index].likes += 1;  // Increment likes for the profile card at the given index
    setPeople(updatedPeople);  // Trigger re-render
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #87CEFA, #ADD8E6)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container style={{ padding: "20px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.8rem",
            fontWeight: "bold",
            textShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
            color: "#004AAD", // Deep navy blue to complement light blue background
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Student Connect
        </h1>

        {/* Add or Edit Profile Form */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (name && favoriteFood && favoriteColor) {
                const updatedPeople = [...people];
                if (editingIndex !== null) {
                  updatedPeople[editingIndex] = { name, favoriteFood, favoriteColor, likes: 0 };
                } else {
                  updatedPeople.push({ name, favoriteFood, favoriteColor, likes: 0 });
                }
                setPeople(updatedPeople);
                setName("");
                setFavoriteFood("");
                setFavoriteColor("");
                setEditingIndex(null);
              }
            }}
            style={{
              width: "50%",
              maxWidth: "400px",
              padding: "15px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "10px", fontSize: "1.5rem" }}>
              {editingIndex !== null ? "Edit Profile" : "Add New Profile"}
            </h3>

            <Form.Group className="mb-2">
              <Form.Label style={{ fontSize: "0.9rem" }}>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label style={{ fontSize: "0.9rem" }}>Favorite Food</Form.Label>
              <Form.Control
                type="text"
                value={favoriteFood}
                onChange={(e) => setFavoriteFood(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label style={{ fontSize: "0.9rem" }}>Favorite Color</Form.Label>
              <Form.Control
                type="text"
                value={favoriteColor}
                onChange={(e) => setFavoriteColor(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{
                width: "100%",
                fontSize: "1rem",
                padding: "8px",
                background: "#004AAD", // Deep blue background for contrast
                borderColor: "#004AAD", // Matching border color
              }}
            >
              {editingIndex !== null ? "Update Profile" : "Add Profile"}
            </Button>
          </Form>
        </div>

        {/* Display Classmates (Profile Cards) */}
        <Row className="justify-content-center">
          {people.map((person, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Myclassmates
                {...person}
                handleLike={() => handleLike(index)} // Pass handleLike function to Myclassmates component
              />
            </Col>
          ))}
        </Row>

        {/* Table View */}
        <h3 style={{ textAlign: "center", marginTop: "40px", fontSize: "1.8rem", color: "#004AAD" }}>
          Classmates Table
        </h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Favorite Food</th>
              <th>Favorite Color</th>
              <th>Likes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.favoriteFood}</td>
                <td style={{ color: person.favoriteColor }}>{person.favoriteColor}</td>
                <td>{person.likes}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(index)}
                    style={{
                      marginRight: "9px",
                      background: "#A7C7E7", // Soft light blue background
                      borderColor: "#A7C7E7", // Matching border color
                      color: "#004AAD", // Dark blue text
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
