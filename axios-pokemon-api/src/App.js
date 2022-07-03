import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonApiData, setPokemonApiData] = useState([]);
  // Using the "Axios" library to make an API call
  // Adding the second Argument to say I only want this "useEffect" to run once/when it originally renders
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        // Setting the Data I want to "state"
        console.log(response);
        setPokemonApiData(response.data.results);
      })
      .catch((error) => console.log("ERROR: " + error));
  }, []);
  return (
    <div className="App">
      <h1>Axios Pokemon API Assignment</h1>
      <ul>
        {/* Cycling through my "state" which will always be an Array to render my <li> tag */}
        {pokemonApiData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
