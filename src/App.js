import React, { useState, useEffect } from 'react';
import './App.css'; 
import ProductList from './ProductList'; 
import Cart from './Cart'; 

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'Shirt' },
      { id: 2, name: 'Pants' },
      { id: 3, name: 'Shoes' },
    ];

    setAllProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts); 
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleProductItemClick = (product) => {
    addToCart(product);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter(
      (product) => product !== productToRemove
    );
    setCartItems(updatedCart);
  };
  
  const handleProductSearch = (query) => {
    setSearchQuery(query);
    const filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><b>Shopi</b></li>
          <li className="nav-item">All</li>
          <li className="nav-item">Clothes</li>
          <li className="nav-item">Electronics</li>
          <li className="nav-item">Furnitures</li>
          <li className="nav-item">Toys</li>
          <ul className="nav-list right-items">
            <li className="nav-item">userintheapp@test.com</li>
            <li className="nav-item">My Orders</li>
            <li className="nav-item">My Account</li>
            <li className="nav-item cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-black-500 cursor-pointer">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
              </svg>
            </li>
          </ul>
        </ul>
      </nav>

      <div className="center-text">Home</div>
      <input
        className="product-search"
        type="text"
        placeholder="Search a product"
        value={searchQuery}
        onChange={(e) => handleProductSearch(e.target.value)}
      />

      <div className="content-wrapper">
        <ProductList
          products={searchQuery ? filteredProducts : allProducts}
          addToCart={handleProductItemClick}
        />
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;
