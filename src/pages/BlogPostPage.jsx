import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import { useData } from '../App';
import './BlogPostPage.css';

const BlogPostPage = () => {
  const { id } = useParams();
  const { blogPosts, loading } = useData();

  if (loading) return <div style={{padding: '100px', textAlign: 'center', fontSize: '20px'}}>Yuklanmoqda...</div>;
  if (!blogPosts.length) return null;

  const post = blogPosts.find(p => p.id === parseInt(id)) || blogPosts[0];
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <>
      <div className="container article-container">
        
        {/* Post Header */}
        <div className="article-header">
          <div className="article-meta">{post.date} - {post.category}</div>
          <h1 className="article-title">{post.title}</h1>
        </div>

        {/* Featured Image */}
        <div className="article-featured-image-wrap">
          <img src={post.img} alt={post.title} className="article-featured-image" />
        </div>

        {/* Content */}
        <div className="article-content">
          <p className="article-paragraph">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </p>
          <p className="article-paragraph-lg">
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
          </p>
          
          <blockquote className="article-blockquote">
             "Blockquotes can be used to signify quotes from people or other important text. They are usually styled differently to stand out from normal text."
          </blockquote>
          
          <h3 className="article-subheading">What is the true generator on the Internet?</h3>
          <p>
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </div>

        <hr className="article-divider" />

        {/* Comments */}
        <div className="comments-section">
          <h3 className="comments-title">3 COMMENTS</h3>
          
          {[1, 2, 3].map(c => (
            <div key={c} className="comment-row">
              <div className="comment-avatar"></div>
              <div>
                <div className="comment-meta">
                  <span className="comment-author">John Doe</span>
                  <span className="comment-date">Jul 17, 2026</span>
                </div>
                <p className="comment-text">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Comment form */}
        <div className="leave-comment-section">
          <h3 className="comments-title">LEAVE A COMMENT</h3>
          <form className="leave-comment-form">
            <input type="text" placeholder="Your name *" className="form-input" />
            <input type="email" placeholder="Your email *" className="form-input" />
            <textarea placeholder="Your Comment" className="form-textarea"></textarea>
            <button className="btn-dark submit-btn">POST COMMENT</button>
          </form>
        </div>

      </div>

      {/* Related Posts */}
      <section className="container section-padding related-posts-section">
        <h2 className="related-posts-title">RELATED POSTS</h2>
        <div className="related-posts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {relatedPosts.map(p => (
            <div key={p.id}>
              <Link to={`/blog/${p.id}`} className="blog-post-card-img-wrap" style={{ display: 'block', overflow: 'hidden', marginBottom: '20px', aspectRatio: '3/2' }}>
                <img src={p.img} alt={p.title} className="blog-post-card-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Link>
              <div className="blog-post-meta" style={{ fontSize: '12px', color: '#a0a0a0', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>{p.date}</div>
              <Link to={`/blog/${p.id}`}>
                <h3 className="blog-post-title" style={{ fontSize: '18px', fontWeight: 500, color: '#111111', lineHeight: '1.4' }}>{p.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default BlogPostPage;
