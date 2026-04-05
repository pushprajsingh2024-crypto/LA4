// Import React and useState hook
import React, { useState } from "react";

// Gallery Component
function Gallery() {

  // Array of image URLs
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400"
  ];

  // State to store currently selected image
  const [selected, setSelected] = useState(images[0]);

  // Container styling
  const container = {
    maxWidth: "800px",
    margin: "20px auto",
    fontFamily: "Arial",
    textAlign: "center"
  };

  // Large preview image styling
  const previewStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px"
  };

  // Thumbnail container styling
  const thumbContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap"
  };

  // Thumbnail image styling
  const thumbStyle = {
    width: "100px",
    height: "70px",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "6px"
  };

  return (
    <div style={container}>

      {/* Header Section with Name and Reg No */}
      <div>
        <h3>Name: Pushpraj</h3>
        <h4>Reg No: 24BCE0044</h4>
      </div>

      {/* Title */}
      <h2>Image Gallery</h2>

      {/* Display selected image */}
      <img src={selected} alt="Preview" style={previewStyle} />

      {/* Thumbnails section */}
      <div style={thumbContainer}>
        {images.map((img, index) => (
          <img
            key={index} // Unique key for each image
            src={img}
            alt={`thumb-${index}`} // Alt text
            style={{
              ...thumbStyle,
              // Highlight selected image
              border: selected === img ? "3px solid #3498db" : "none"
            }}
            // On click, update selected image
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

    </div>
  );
}

// Main App component
function App() {
  return <Gallery />; // Render Gallery component
}

// Export App so it can be used in index.js
export default App;
