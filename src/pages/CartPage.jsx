import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Newsletter from '../components/Newsletter';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const subtotal = cart.reduce((temp, item) => temp + (item.price * item.qty), 0);
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title="CART" breadcrumb="Cart" />
      
      <div className="container cart-container">
        
        {cart.length === 0 ? (
          <div className="cart-empty">
            <p className="cart-empty-text">Your cart is currently empty.</p>
            <Link to="/shop" className="btn-dark">RETURN TO SHOP</Link>
          </div>
        ) : (
          <div className="cart-grid">
            
            {/* Table */}
            <div>
              <table className="cart-table">
                <thead>
                  <tr className="cart-table-header">
                    <th className="cart-table-th">PRODUCT</th>
                    <th className="cart-table-th">QUANTITY</th>
                    <th className="cart-table-th">SUBTOTAL</th>
                    <th className="cart-table-th"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr key={item.id} className="cart-table-row">
                      <td className="cart-product-cell">
                        <div className="cart-product-img-wrap">
                          <img src={item.img} alt={item.name} className="cart-product-img" />
                        </div>
                        <div className="cart-product-name">{item.name}</div>
                      </td>
                      <td className="cart-qty-cell">
                        <div className="cart-qty-wrap">
                          <button onClick={() => updateQuantity(item.id, -1)} className="cart-qty-btn">-</button>
                          <div className="cart-qty-display">{item.qty}</div>
                          <button onClick={() => updateQuantity(item.id, 1)} className="cart-qty-btn">+</button>
                        </div>
                      </td>
                      <td className="cart-price-cell">${(item.price * item.qty).toFixed(2)}</td>
                      <td className="cart-remove-cell">
                        <button onClick={() => removeFromCart(item.id)} className="cart-remove-btn">×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-actions">
                <Link to="/shop" className="btn-dark btn-outline">CONTINUE SHOPPING</Link>
                <button className="btn-dark">UPDATE CART</button>
              </div>
            </div>

            {/* Cart Totals */}
            <div>
              <div className="cart-totals-wrap">
                <h2 className="cart-totals-title">CART TOTALS</h2>
                
                <div className="cart-totals-row">
                  <span className="cart-totals-label">Subtotal</span>
                  <span className="cart-totals-value">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="cart-totals-row-total">
                  <span className="cart-totals-label-strong">Total</span>
                  <span className="cart-totals-value">${subtotal.toFixed(2)}</span>
                </div>
                
                <button 
                  onClick={() => navigate('/checkout')}
                  className="btn-dark btn-full" 
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
            
          </div>
        )}
      </div>

      <Newsletter />
    </>
  );
};

export default CartPage;
