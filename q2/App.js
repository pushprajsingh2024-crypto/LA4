// Import React and useState hook for state management
import React, { useState } from "react";

// Import ReactDOM to render React app into the DOM
import ReactDOM from "react-dom/client";

// Calculator component
function Calculator() {

  // State for first number input
  const [num1, setNum1] = useState("");

  // State for second number input
  const [num2, setNum2] = useState("");

  // State for storing result
  const [result, setResult] = useState(0);

  // Styling for calculator container
  const containerStyle = {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial"
  };

  // Styling for input fields
  const inputStyle = {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  // Styling for buttons
  const buttonStyle = {
    margin: "5px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  // Function to add numbers
  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  // Function to subtract numbers
  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div>
      {/* Header Section */}
      <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "Arial" }}>
        <h3>Name: Pushpraj</h3> {/* Updated Name */}
        <h4>Reg No: 24BCE0044</h4> {/* Updated Registration Number */}
      </div>

      {/* Calculator Box */}
      <div style={containerStyle}>
        <h2>Basic Calculator</h2>

        {/* Input for first number */}
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          style={inputStyle}
        />

        {/* Input for second number */}
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          style={inputStyle}
        />

        {/* Buttons for operations */}
        <div>
          <button style={buttonStyle} onClick={add}>Add</button>
          <button style={buttonStyle} onClick={subtract}>Subtract</button>
        </div>

        {/* Display result */}
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}

// Main App component
function App() {
  return <Calculator />;
}

// Export App component
export default App;

// Render App into root div in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
