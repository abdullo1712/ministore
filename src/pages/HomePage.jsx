import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { useData } from '../App';
import './HomePage.css';

const HomePage = () => {
  const { products, blogPosts, loading } = useData();

  if (loading) {
    return <div style={{padding: '100px', textAlign: 'center', fontSize: '20px'}}>Yuklanmoqda...</div>;
  }

  const mobiles = products.filter(p => p.category === 'Phones').slice(0, 4);
  const watches = products.filter(p => p.category === 'Watches').slice(0, 4);

  return (
    <>
      <Hero />

      {/* Mobile Products */}
      <section className="section-padding container">
        <div className="section-title">
          <h2>MOBILE PRODUCTS</h2>
          <Link to="/shop">GO TO SHOP</Link>
        </div>
        <div className="home-grid">
          {mobiles.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Smart Watches */}
      <section className="section-padding container home-watches-section">
        <div className="section-title">
          <h2>SMART WATCHES</h2>
          <Link to="/shop">GO TO SHOP</Link>
        </div>
        <div className="home-grid">
          {watches.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* New Year Sale Banner */}
      <section className="sale-section">
        <div className="container sale-grid">
          <div className="sale-text-wrap">
            <span className="sale-label">— 10% OFF</span>
            <h2 className="sale-title">NEW YEAR SALE</h2>
            <Link to="/shop" className="btn-dark">SHOP SALE</Link>
          </div>
          <div className="sale-image-wrap">
            <img src={products[4]?.img} alt="Sale Image" className="sale-image" />
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="section-padding container">
        <div className="section-title">
          <h2>LATEST POSTS</h2>
          <Link to="/blog">READ BLOG</Link>
        </div>
        <div className="latest-posts-grid">
          {blogPosts.slice(0, 3).map(post => (
            <div key={post.id}>
              <Link to={`/blog/${post.id}`} className="post-card-img-wrap">
                <img src={post.img} alt={post.title} className="post-card-img" />
              </Link>
              <div className="post-card-meta">{post.date}</div>
              <Link to={`/blog/${post.id}`}>
                <h3 className="post-card-title">{post.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />

      {/* Shop Our Insta */}
      <section className="section-padding container">
        <h2 className="insta-title">SHOP OUR INSTA</h2>
        <div className="insta-grid">
          {products.slice(15, 20).map(p => (
            <img key={`insta-${p.id}`} src={p.img} alt="Insta" className="insta-img" />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
