// Import React and useState hook
import React, { useState } from "react";

// Grade Calculator Component
function GradeCalculator() {

  // State for marks input
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");

  // State for average and grade
  const [average, setAverage] = useState(0);
  const [grade, setGrade] = useState("");

  // Container styling
  const container = {
    width: "320px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
    backgroundColor: "#f4f4f4"
  };

  // Input box styling
  const inputStyle = {
    width: "90%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  // Button styling
  const buttonStyle = {
    marginTop: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  // Function to calculate average and grade
  const calculate = () => {

    // Calculate average
    const avg = (Number(m1) + Number(m2) + Number(m3)) / 3;
    setAverage(avg.toFixed(2));

    // Assign grade based on average
    if (avg >= 90) setGrade("A+");
    else if (avg >= 75) setGrade("A");
    else if (avg >= 60) setGrade("B");
    else if (avg >= 50) setGrade("C");
    else setGrade("Fail");
  };

  return (
    <div>

      {/* Header Section */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h3>Name: Pushpraj</h3>
        <h4>Reg No: 24BCE00044</h4>
      </div>

      {/* Calculator Box */}
      <div style={container}>
        <h2>Grade Calculator</h2>

        {/* Input fields for marks */}
        <input
          type="number"
          value={m1}
          onChange={(e) => setM1(e.target.value)}
          placeholder="Subject 1"
          style={inputStyle}
        />

        <input
          type="number"
          value={m2}
          onChange={(e) => setM2(e.target.value)}
          placeholder="Subject 2"
          style={inputStyle}
        />

        <input
          type="number"
          value={m3}
          onChange={(e) => setM3(e.target.value)}
          placeholder="Subject 3"
          style={inputStyle}
        />

        {/* Calculate button */}
        <button style={buttonStyle} onClick={calculate}>
          Calculate
        </button>

        {/* Display results */}
        <h3>Average: {average}</h3>
        <h3>Grade: {grade}</h3>
      </div>

    </div>
  );
}

// Main App component
function App() {
  return <GradeCalculator />;
}

// Export App component
export default App;
