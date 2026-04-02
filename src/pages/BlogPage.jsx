import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Newsletter from '../components/Newsletter';
import { useData } from '../App';
import './BlogPage.css';

const BlogPage = () => {
  const { blogPosts, loading } = useData();

  if (loading) return <div style={{padding: '100px', textAlign: 'center', fontSize: '20px'}}>Yuklanmoqda...</div>;

  return (
    <>
      <PageHeader title="BLOG" breadcrumb="Blog" />

      <div className="container blog-container">
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div key={post.id}>
              <Link to={`/blog/${post.id}`} className="blog-post-card-img-wrap">
                <img src={post.img} alt={post.title} className="blog-post-card-img" />
              </Link>
              <div className="blog-post-meta">{post.date} - {post.category}</div>
              <Link to={`/blog/${post.id}`}>
                <h3 className="blog-post-title">{post.title}</h3>
              </Link>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">&gt;</button>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default BlogPage;
