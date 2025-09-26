import React, { useState } from "react";

function App() {
  // Initial dictionary
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const result = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (result) {
      setDefinition(result.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dictionary App</h1>

      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {/* Always render Definition header */}
      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
}

export default App;
