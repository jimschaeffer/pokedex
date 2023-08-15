import React from "react";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  return (
    <div className="App">
      <h1>
        <img
          src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png"
          alt="logo"
        ></img>
      </h1>
      <h3>the world's most comprehensive collection of pocket monsters.</h3>
      <PokemonInfo />
    </div>
  );
}

export default App;
