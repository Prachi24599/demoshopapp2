import React from "react";
import Products from "./components/Products";
import "./App.css";

function App() {
  const products = [
    {
      id: "P1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 2, 3),
    },
    {
      id: "p2",
      title: "Sirf Excel",
      amount: 200,
      date: new Date(2021, 2, 2),
    },
    {
      id: "p3",
      title: "Tide",
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: "p4",
      title: "Maggi",
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];
  // console.log(typeof products);
  return (
    <div>
      <Products items={products}></Products>
    </div>
  );
}

export default App;
