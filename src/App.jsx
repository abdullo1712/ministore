import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';

// ==================== DATA CONTEXT ====================
const DataContext = createContext();
export const useData = () => useContext(DataContext);

const PRODUCT_IMAGES = [
  'https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=400&q=80',
];

const BLOG_IMAGES = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80',
];
// ======================================================

function App() {
  const [products, setProducts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(res => res.json())
      .then(data => {
        const mappedProducts = data.slice(0, 20).map((post) => {
          const originalPrice = 199 + (post.id * 15);
          return {
            id: post.id,
            name: post.title.split(' ').slice(0, 3).join(' ') + '...',
            price: originalPrice,
            oldPrice: post.id % 3 === 0 ? originalPrice + 50 : null,
            category: post.id % 2 === 0 ? 'Phones' : 'Watches',
            rating: 5,
            reviews: post.id * 12,
            img: PRODUCT_IMAGES[(post.id - 1) % PRODUCT_IMAGES.length],
            badge: post.id === 1 ? 'New' : post.id === 2 ? 'Sale' : null,
            description: post.body,
          };
        });

        const mappedBlogs = data.slice(20, 26).map((post, idx) => ({
          id: post.id,
          title: post.title.substring(0, 40) + '...',
          date: `2${post.id % 9} Mar, 2024`,
          category: post.id % 2 === 0 ? 'Tech' : 'Lifestyle',
          desc: post.body,
          img: BLOG_IMAGES[idx % BLOG_IMAGES.length],
        }));

        setProducts(mappedProducts);
        setBlogPosts(mappedBlogs);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ products, blogPosts, loading }}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:id" element={<BlogPostPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </DataContext.Provider>
  );
}

export default App;
