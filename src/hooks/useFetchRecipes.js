import { useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
    tags: "under_30_minutes",
  },
  headers: {
    "x-rapidapi-key": "59d70297eemshefafa54c0ce051ep192df6jsn5c37f91c21fb",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    setRecipes(null);
    try {
      const response = await axios.request(options);
      setRecipes(response.data.results);
      //console.log(response.count);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };
  return [recipes, loading, error];
};

export default useFetchRecipes;
