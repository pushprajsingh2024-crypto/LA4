// Import React
import React from "react";

import ReactDOM from "react-dom/client";

// Functional component using props
function Welcome(props) {

  // Inline styling
  const style = {
    color: "#2c3e50",
    backgroundColor: "#ecf0f1",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial"
  };

  return (
    <div>

      {/* Header Section */}
      <div style={{ textAlign: "center", marginTop: "20px", fontFamily: "Arial" }}>
        <h3>Name: Pushpraj</h3>
        <h4>Reg No: 24BCE0044</h4>
      </div>

      {/* Welcome Box */}
      <div style={style}>
        <h1>Hello, {props.name}!</h1>
        <h2>Welcome to {props.city}</h2>
        <p>
          This is a simple React application demonstrating functional components,
          props, JSX, and inline styling.
        </p>
      </div>

    </div>
  );
}

// Main App component
function App() {
  return <Welcome name="Pushpraj" city="Katpadi" />;
}

// Export App
export default App;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
