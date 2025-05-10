import React, { useRef } from 'react';
import '../styles/styles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  "All", "Live", "News", "Indian Army", "Music", "Podcasts", "Mixes",
  "Disha Patani", "Attack aircraft", "Sitcoms", "Gaming", "Billionaires",
  "Akshay Kumar", "Technology", "War Updates", "Narendra Modi", "Assam",
  "Funny Videos", "Pranks"
];

const Categories = ({ setSelectedCategory }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  return (
    <div className="categories-wrapper">
      <button className="scroll-btn left" onClick={() => scroll('left')}>
        <FaChevronLeft />
      </button>
      <div className="categories" ref={scrollRef}>
        <div className="category-scroll">
          {categories.map((cat, i) => (
            <span
              key={i}
              className="category-chip"
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <button className="scroll-btn right" onClick={() => scroll('right')}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Categories;
