import React from "react";
import { useParams } from "react-router-dom";
//import { recipes } from "../components/CardList";

function RecipePage() {
  const { id } = useParams(); //id is now a string!!
  //const recipe = recipes.find((r) => r.id === parseInt(id));

  return <div>Recipe Page</div>;
}

export default RecipePage;
