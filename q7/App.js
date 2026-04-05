// Import React and useState hook
import React, { useState } from "react";

// Utility function to fetch books from Google Books API
async function fetchBooks(query) {

  // Fetch data from API
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  const data = await res.json();

  // If no books found, return empty array
  if (!data.items) return [];

  // Process and return required book details
  return data.items.map((item) => {
    const info = item.volumeInfo;

    return {
      id: item.id,
      title: info.title,
      author: info.authors ? info.authors.join(", ") : "Unknown",
      image: info.imageLinks ? info.imageLinks.thumbnail : "",
      publisher: info.publisher || "N/A",
      year: info.publishedDate ? info.publishedDate.substring(0, 4) : "N/A"
    };
  });
}

// Header Component
function Header() {
  return <h1 style={{ textAlign: "center" }}>Book Explorer</h1>;
}

// Search Component
function Search({ onSearch }) {

  // State for search query
  const [query, setQuery] = useState("");

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>

      {/* Input field */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
      />

      {/* Search button */}
      <button onClick={() => onSearch(query)}>Search</button>

    </div>
  );
}

// Book Card Component (for each book)
function BookCard({ book }) {

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    width: "180px",
    backgroundColor: "#f9f9f9"
  };

  return (
    <div style={cardStyle}>

      {/* Book image */}
      {book.image && <img src={book.image} alt={book.title} />}

      {/* Book details */}
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>{book.publisher}</p>
      <p>{book.year}</p>

    </div>
  );
}

// Book List Component
function BookList({ books }) {

  const grid = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center"
  };

  return (
    <div style={grid}>

      {/* Render all books */}
      {books.map((b) => (
        <BookCard key={b.id} book={b} />
      ))}

    </div>
  );
}

// Main App Component
function App() {

  // State to store books
  const [books, setBooks] = useState([]);

  // Function to handle search
  const handleSearch = async (query) => {
    const result = await fetchBooks(query);
    setBooks(result);
  };

  return (
    <div style={{ fontFamily: "Arial", marginTop: "20px" }}>

      {/* Header Section */}
      <div style={{ textAlign: "center" }}>
        <h3>Name: Pushpraj</h3>
        <h4>Reg No: 24BCE0044</h4>
      </div>

      {/* Components */}
      <Header />
      <Search onSearch={handleSearch} />
      <BookList books={books} />

    </div>
  );
}

// Export App component
export default App;
