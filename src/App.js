import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [season, setSeason] = useState("spring");

  const handleInputChange = (e) => {
    setSeason(e.target.value);
  };

  return (
    <div className="App">
      <h1>Fave Season</h1>
      <input
        value={season}
        type="text"
        aria-label="Choose favorite season"
        onChange={handleInputChange}
      />

      <p>
        My favorite season is <span className="season">{season}!</span>
      </p>
    </div>
  );
}
