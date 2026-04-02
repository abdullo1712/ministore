import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { useCart } from '../context/CartContext';
import { useData } from '../App';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products, loading } = useData();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('Description');

  if (loading) return <div style={{padding: '100px', textAlign: 'center', fontSize: '20px'}}>Yuklanmoqda...</div>;
  if (!products.length) return null;

  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <div className="container product-detail-container">
        
        {/* Left: Images */}
        <div className="product-images-col">
          <div className="product-main-image-wrap">
            <img src={product.img} alt={product.name} className="product-main-image" />
          </div>
          <div className="product-thumbs-grid">
             <div className="product-thumb-wrap">
               <img src={product.img} alt="thumb1" className="product-thumb-img" />
             </div>
             <div className="product-thumb-wrap inactive">
               <img src={product.img} alt="thumb2" className="product-thumb-img" />
             </div>
             <div className="product-thumb-wrap inactive">
               <img src={product.img} alt="thumb3" className="product-thumb-img" />
             </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="product-info-col">
          <h1 className="product-info-title">{product.name}</h1>
          <div className="product-info-price">${product.price.toFixed(2)}</div>
          
          <p className="product-info-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ut sed imperdiet in vitae viverra sem dictumst. Suspendisse sagittis eu id pretium egestas amet iaculis suspendisse dictum. 
          </p>

          <div className="product-color-selector">
            <span className="product-color-label">COLOR</span>
            <div className="product-colors-wrap">
              <button className="color-btn color-brown"></button>
              <button className="color-btn color-black"></button>
              <button className="color-btn color-white"></button>
            </div>
          </div>

          <div className="product-actions-wrap">
            <div className="qty-selector">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="qty-btn">-</button>
              <div className="qty-display">{qty}</div>
              <button onClick={() => setQty(qty + 1)} className="qty-btn">+</button>
            </div>
            <button className="btn-dark" onClick={() => {
              for (let i = 0; i < qty; i++) addToCart(product);
            }}>
              ADD TO CART
            </button>
          </div>

          <div className="product-meta">
            <div className="meta-row"><span className="meta-label">Category:</span> <span className="meta-value">{product.category}</span></div>
            <div><span className="meta-label">Tags:</span> <span className="meta-value">Watch, Smart</span></div>
          </div>
        </div>

      </div>

      {/* Tabs */}
      <div className="container product-tabs-container">
        <div className="product-tabs-header">
          {['Description', 'Additional Information', 'Reviews (2)'].map(t => (
            <button 
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? 'tab-btn active' : 'tab-btn inactive'}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tab === 'Description' && (
            <p>Product Information. Vivamus sagittis lacus vel augue laoreet rutrum faucibus accumsan. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
          )}
          {tab === 'Additional Information' && (
            <p>Weight: 1.5 lbs. Dimensions: 10 x 10 x 5 inches.</p>
          )}
          {tab === 'Reviews (2)' && (
            <p>Customer reviews will be explicitly listed here.</p>
          )}
        </div>
      </div>

      {/* Related Products */}
      <section className="container section-padding">
        <div className="section-title">
          <h2>RELATED PRODUCTS</h2>
          <Link to="/shop">VIEW ALL</Link>
        </div>
        <div className="related-products-grid">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default ProductPage;
