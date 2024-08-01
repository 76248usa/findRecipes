import React from "react";
import Card from "./Card";

export const recipes = [
  {
    id: 1,
    name: "Poke Bowl",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2021/Poke-Bowl-11.jpeg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1644553103&s=e3d80debf17159866b52147db4167ef7",
    tag: "Romantic Dinner",
    numberOfMinutes: 30,
  },
  {
    id: 2,
    name: "Chocolate Cake",
    image:
      "https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg",
    tag: "Cakes",
    numberOfMinutes: 130,
  },
  {
    id: 3,
    name: "Meat Pie",
    image:
      "https://www.shutterstock.com/image-photo/sliced-ground-beef-meat-pie-260nw-2315684189.jpg",
    tag: "Pies",
    numberOfMinutes: 60,
  },
  {
    id: 4,
    name: "Kanafeh",
    image:
      "https://st4.depositphotos.com/36716422/38431/i/450/depositphotos_384313206-stock-photo-turkish-dessert-kunefe-slide-pistachio.jpg",
    tag: "Cheese Pastry",
    numberOfMinutes: 70,
  },
];

export default function CardList() {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
