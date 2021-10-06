import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [heading, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
