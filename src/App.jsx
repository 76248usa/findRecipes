import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main_container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
