import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { useData } from '../App';
import './ShopPage.css';

const ShopPage = () => {
  const { products, loading } = useData();
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Phones', 'Accessories', 'Tablets', 'Watches'];

  if (loading) return <div style={{padding: '100px', textAlign: 'center', fontSize: '20px'}}>Yuklanmoqda...</div>;

  const displayProducts = filter === 'All' ? products : products.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <>
      <PageHeader title="SHOP" breadcrumb="Shop" />

      <div className="container shop-container">
        <aside className="shop-sidebar">
          <div className="sidebar-block">
            <h3 className="sidebar-title">CATEGORIES</h3>
            <ul className="category-list">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => setFilter(cat)}
                    className={filter === cat ? 'category-btn active' : 'category-btn inactive'}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="sidebar-title">TAGS</h3>
            <div className="tags-wrap">
              {['White', 'Cheap', 'Mobile', 'Apple'].map(tag => (
                <span key={tag} className="tag-badge">{tag}</span>
              ))}
            </div>
          </div>
        </aside>

        <div className="shop-main">
          <div className="shop-toolbar">
            <div className="shop-result-count">Showing {displayProducts.length} results</div>
            <div>
              <select className="shop-sort-select">
                <option>Default sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by latest</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </select>
            </div>
          </div>

          <div className="shop-grid">
            {displayProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">&gt;</button>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default ShopPage;
