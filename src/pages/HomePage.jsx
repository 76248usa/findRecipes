import React from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import useFetchRecipes from "../hooks/useFetchRecipes";
import Loading from "../components/Loading";

function HomePage() {
  const [recipes, loading, error] = useFetchRecipes();

  return (
    <>
      <div>
        <Header />
        {loading && <Loading />}
        {recipes && <CardList recipes={recipes} />}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default HomePage;
