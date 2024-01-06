import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const [cartVisible, setCartVisible] = useState(false);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className="cart">
      <div className="cart-icon" onClick={toggleCartVisibility}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-black-500 cursor-pointer">
          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
        </svg>
        <span>{cartItems.length}</span>
      </div>
      
      {/* Show cart content when cartVisible is true */}
      {cartVisible && (
        <div className="cart-content">
          <h2>My Order</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))}
          <div className="total">
            <p>${totalPrice}</p>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
