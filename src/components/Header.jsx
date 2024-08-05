import { useState } from "react";
import useFetchRecipes from "../hooks/useFetchRecipes";

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = () => {
    handleSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      <header className="main_header">
        <div className="text-container">
          <h1 className="header-title">
            Look for <span>Cosmos</span> Food
          </h1>
          <p className="header-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas
            quos maxime temporibus eligendi et delectus harum? Commodi,
            similique nisi.
          </p>
          <div className="header-input-container">
            <input
              type="text"
              placeholder="Find a Recipe..."
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <button onClick={handleClick}>Search...</button>
          </div>
        </div>
        <div>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/how-to-make-french-toast-1589827448.jpg?crop=0.734xw:0.490xh;0.0897xw,0.323xh&resize=1200:*"
            alt=""
            className="main_img"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
