import React, { useState, useEffect } from 'react';
import { fetchProducts } from './services/apiService';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            {/* Plus icon to add the product to the cart */}
            <button className="add-to-cart" onClick={() => addToCart(product)}>+</button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="selected-product">
          <div className="detail-box">
            <b>Detail</b>
            <button className="close-btn" onClick={handleClose}>
              &#10006;
            </button>
            <img src={selectedProduct.images[0]} alt={selectedProduct.title} />
            <h3>{selectedProduct.title}</h3>
            <p>Price: ${selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
