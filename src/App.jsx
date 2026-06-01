import { createRoot } from "react-dom/client";
import Order from "./Order";


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
