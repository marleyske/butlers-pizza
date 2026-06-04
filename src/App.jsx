import { createRoot } from "react-dom/client";
import Order from "./Order";

// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Butlers Pizza"),
//     React.createElement(Pizza, {
//       name: "The Pepperoni Pizza",
//       description: "Mozzarella Cheese, Pepperoni",
//     }),
//     React.createElement(Pizza, {
//       name: "The Hawaiian Pizza",
//       description: "Sliced Ham, Pineapple, Mozzarella Cheese",
//     }),
//     React.createElement(Pizza, {
//       name: "The Big Meat Pizza",
//       description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
//     }),
//   ]);
// };

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));

const App = () => {
  return (
    <div>
      <h1>Butlers Pizza - Order Now</h1>
      <Order /> 
    </div>
  );
};

const container = document.getElementById("root"); // Reference
const root = createRoot(container); // Activation
root.render(<App />); // Injection
