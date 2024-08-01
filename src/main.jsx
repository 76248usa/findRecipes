import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar.jsx";
import RecipePage from "./pages/RecipePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
