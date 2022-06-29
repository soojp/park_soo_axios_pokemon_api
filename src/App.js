import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then((response) => setPokemon(response.results));
  }, []);
  return (
    <div className="App">
      {pokemon.length > 0 &&
        pokemon.map((poke, index) => {
          return <li key={index}>{poke.name}</li>
        })}
    </div>
  );
}

export default App
