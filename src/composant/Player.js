import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/player.css'
// les différents données d'un joueur sont entrés en paramètre dans la fonction Player
const Player = ({ nom, club , nationalite, numero, age, imageUrl }) => {
    return (
        <>
            <Card className="card">
                <Card.Img variant="top" src={imageUrl}  />
                <Card.Body  className="card-second">
                    <Card.Title>{nom}</Card.Title>
                    <Card.Text >
                    Club: {club} <br />
                    Nationalité: {nationalite} <br />
                    Numéo: {numero} <br />
                    Age: {age}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Player;