import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useData } from '../App';
import './Hero.css';

const HERO_TITLES = [
  "YOUR PRODUCTS<br/>ARE GREAT.",
  "TECHNOLOGY<br/>OF THE FUTURE.",
  "SIMPLY<br/>BEAUTIFUL."
];

const Hero = () => {
  const { products, loading } = useData();
  if (loading || !products.length) return null;

  const slidesData = products.slice(0, 3).map((p, idx) => ({
    id: p.id,
    title: HERO_TITLES[idx],
    image: p.img,
    linkText: "SHOP PRODUCT",
    linkUrl: `/product/${p.id}`
  }));

  return (
    <div className="hero-section">
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="hero-slider"
          style={{ paddingBottom: '40px' }}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="hero-grid">
                <div>
                  <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                  <Link to={slide.linkUrl} className="btn-dark">
                    {slide.linkText}
                  </Link>
                </div>
                <div className="hero-image-wrap">
                  <img src={slide.image} alt="Featured Product" className="hero-image" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
