import { useState } from "react";
import Pizza from "./Pizza";

export default function Order () {
    // const pizzaType = "Pepperoni";
    // const pizzaSize = "M";
    const [pizzaType, setPizzaType] = useState("Pepperoni");
    const [pizzaSize, setPizzaSize] = useState("M");
    console.log(pizzaType, pizzaSize);
    return (
        <div className="order">
            <h2>Create Order</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select 
                         
                            onChange={(e) => setPizzaType(e.target.value)}
                            name="pizza-type" 
                            value={pizzaType}
                        >
                            <option value="Pepperoni">Pepperoni Pizza</option>
                            <option value="Cheese">Cheese Pizza</option>
                            <option value="Hawiian">Hawiian Pizza</option>
                        </select>
                    </div>                   
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input
                                    checked={pizzaSize === "S"}
                                    onChange={(e) => setPizzaSize(e.target.value)} // could use onChange={(e.) => setPizzaSize("S")}
                                    type="radio"
                                    name="pizza-size"
                                    value="S"
                                    id="pizza-s"

                                />
                                <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input
                                    checked={pizzaSize === "M"}
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                    type="radio"
                                    name="pizza-size"
                                    value="M"
                                    id="pizza-m"
                                />
                                <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                <input
                                  checked={pizzaSize === "L"}
                                  onChange={(e) => setPizzaSize(e.target.value)}
                                  type="radio"
                                  name="pizza-size"
                                  value="L"
                                  id="pizza-l"
                                />
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                </div>
                <button type="submit">Add to Cart</button>
              </div>
              <div className="order-pizza">
                <Pizza 
                    name="Pepperoni" 
                    description="Mozarella Cheese, Pepperoni" 
                    image={"/public/pizzas/pepperoni.webp"} 
                />
                <p>14,99</p>
              </div>
            </form>
        </div>
    );    
}