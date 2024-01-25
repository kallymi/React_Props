
import React from "react";
import Player from "./Player";
import players from "../Playerjson";
import '../assets/style/player.css'
// La liste des joeur   
const PlayersList = () => {
    return (
        <div  className="div-flex">
            {/* chaque players du fichier json mappe par son index, ce qui nous permet d'afficher
            autant de liste de joeur qui nous voulons, en ajoutant à chaque fois dans le fichier json */}
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;