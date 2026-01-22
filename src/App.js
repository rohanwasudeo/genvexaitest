import React from "react";
import './App.css';

function App() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column bg-light p-0">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="text-center animate__animated animate__fadeInDown">
          <h1 className="display-3 fw-bold mb-3">Hello Jahan</h1>
          <p className="lead text-secondary">Welcome to your simple React app!</p>
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-3 animate__animated animate__fadeInUp">
        &copy; {new Date().getFullYear()} Hello Jahan React App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
