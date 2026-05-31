import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Butlers Pizza - Order Now</h1>
      <Pizza name="Mixed Breed" description="Mozarella Cheese, Peppers, Onions, Pepperoni, and Olives" image={"/public/pizzas/pep_msh_pep.webp"}/>
      <Pizza name="Pepperoni" description="Mozarella Cheese, Pepperoni" image={"/public/pizzas/pepperoni.webp"} />
      <Pizza name="Cheese" description="Mozarella Cheese" image={"/public/pizzas/four_cheese.webp"} />
      <Pizza name="Hawiian" description="Mozarella Cheese, Pineapple, Ham" image={"/public/pizzas/hawaiian.webp"} />
      
    </div>
  )
};

const container = document.getElementById("root"); // Reference
const root = createRoot(container); // Activation
root.render(<App />); // Injection
