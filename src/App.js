import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Butlers Pizza"),
    React.createElement(Pizza, {
      name: "Mixed Breed",
      description: "Monzorella Cheese, Peppers, Onions, Sausage, and Olives",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza",
      description: "Monzorella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Cheese Pizza",
      description: "Monzorella Cheese",
    }),
    React.createElement(Pizza, {
      name: "Hawiian Pizza",
      description: "Monzorella Cheese, Pineapple, Ham",
    }),
    React.createElement(Pizza),
    //React.createElement("p", {}, "Low Cost Pizzas")
  );
};

const container = document.getElementById("root"); // Reference
const root = createRoot(container); // Activation
root.render(React.createElement(App, {})); // Injection
