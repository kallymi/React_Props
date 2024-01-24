import React from 'react';
import PlayersList from './composant/PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h3>Mes meilleurs joueurs de football de cette génération!!</h3>
      <p> Découvrer avec moi mon catalogue de meilleurs joueur de notre époque...</p>
      <PlayersList />
    </div>
  );
}

export default App;
