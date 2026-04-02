import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`} className="product-image-link">
          <img 
            src={product.img} 
            alt={product.name} 
            className="product-image"
          />
        </Link>
        
        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        <div className="product-add-overlay">
          <button 
            onClick={() => addToCart(product)}
            className="product-add-btn"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.name}</h3>
        </Link>
        <div className="product-price">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
