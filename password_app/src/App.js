import React, { useState } from "react";
import "./App.css";
function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const generatePassword = () => {
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_-+=<>?";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);
  };
  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div>
        <label>Password Length: </label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label>Include Numbers: </label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </div>
      <div>
        <label>Include Symbols: </label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <h2>Generated Password:</h2>
        <p>{password}</p>
      </div>
    </div>
  );
}
export default App;
