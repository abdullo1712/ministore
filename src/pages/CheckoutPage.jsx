import React from 'react';
import PageHeader from '../components/PageHeader';
import Newsletter from '../components/Newsletter';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const InputField = ({ label }) => (
  <div className="form-group">
    <label className="form-label">{label} <span className="form-label-required">*</span></label>
    <input type="text" className="form-input" />
  </div>
);

const CheckoutPage = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce((temp, item) => temp + (item.price * item.qty), 0);

  return (
    <>
      <PageHeader title="CHECKOUT" breadcrumb="Checkout" />
      
      <div className="container checkout-container">
        
        {/* Left: Billing Details */}
        <div>
          <h2 className="checkout-section-title">BILLING DETAILS</h2>
          
          <div className="form-grid">
            <InputField label="First name" />
            <InputField label="Last name" />
          </div>
          
          <InputField label="Company name (optional)" />
          
          <div className="form-group">
            <label className="form-label">Country / Region <span className="form-label-required">*</span></label>
            <select className="form-select">
              <option>United States (US)</option>
              <option>United Kingdom</option>
              <option>Canada</option>
            </select>
          </div>

          <InputField label="Street address" />
          <InputField label="Town / City" />
          <InputField label="State / County" />
          <InputField label="Postcode / ZIP" />
          <InputField label="Phone" />
          <InputField label="Email address" />
        </div>

        {/* Right side */}
        <div>
          <h2 className="checkout-section-title">ADDITIONAL INFORMATION</h2>
          <div style={{ marginBottom: '40px' }}>
            <label className="form-label">Order notes (optional)</label>
            <textarea className="form-textarea" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
          </div>

          <h2 className="checkout-section-title">CART TOTALS</h2>
          
          <div className="checkout-totals-wrap">
            
            <div className="checkout-totals-row">
              <span className="checkout-totals-label">Subtotal</span>
              <span className="checkout-totals-value">${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="checkout-totals-row-total">
              <span className="checkout-totals-label-strong">Total</span>
              <span className="checkout-totals-value-strong">${subtotal.toFixed(2)}</span>
            </div>

            <p className="payment-notice">
              Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.
            </p>
            
            <button className="btn-dark btn-full">
              PLACE AN ORDER
            </button>
          </div>
        </div>

      </div>

      <Newsletter />
    </>
  );
};

export default CheckoutPage;
