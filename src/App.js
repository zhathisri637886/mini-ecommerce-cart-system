
import React, { useState } from "react";
import "./App.css";
function App() {
  const products = [
    { id: 1, name: "cricket bat", price: 1600 },
    { id: 2, name: "hockey stick", price: 1200 },
    { id: 3, name: "volley ball", price: 800 },
    { id: 4, name: "sports shoes", price: 1999 },
    { id: 4, name: "cricket ball", price: 500 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemExists = cart.find((item) => item.id === product.id);

    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
  <div>
    <div className="navbar">
      Champion's Shop...
    </div>

    <div className="container">

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button
              className="btn"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>

        {cart.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>

            <p>
              ₹{item.price} × {item.quantity}
            </p>

            <button
              className="qty-btn"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>

            <button
              className="qty-btn"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>

            <button
              className="remove-btn"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>

            <hr />
          </div>
        ))}

        <div className="total">
          Total Price : ₹{totalPrice}
        </div>
      </div>

    </div>
  </div>
);
}

export default App;
