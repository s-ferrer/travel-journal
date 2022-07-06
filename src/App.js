import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import dataCard from "./data";

export default function App() {
  const cards = dataCard.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Header />
      <section className="card-list">{cards}</section>
    </div>
  );
}
