import React, { useRef } from 'react'; // Import React and the useRef hook
import '../styles/styles.css'; // Import global or component-specific CSS
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import left and right chevron icons from react-icons

// Define a static list of category names to display as selectable chips
const categories = [
  "All", "Live", "News", "Indian Army", "Music", "Podcasts", "Mixes",
  "Disha Patani", "Attack aircraft", "Sitcoms", "Gaming", "Billionaires",
  "Akshay Kumar", "Technology", "War Updates", "Narendra Modi", "Assam",
  "Funny Videos", "Pranks"
];

// Main functional component that accepts setSelectedCategory prop
const Categories = ({ setSelectedCategory }) => {
  const scrollRef = useRef(); // useRef is used to get a reference to the scrollable div

  // This function scrolls the category list left or right smoothly
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200, // Scroll by 200px in either direction
        behavior: 'smooth' // Smooth scrolling animation
      });
    }
  };

  // When a category is clicked, pass it to the parent via setSelectedCategory
  // If 'All' is selected, we reset the filter by sending null
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  return (
    <div className="categories-wrapper"> {/* Wrapper div for overall layout */}
      <button className="scroll-btn left" onClick={() => scroll('left')}>
        <FaChevronLeft /> {/* Left scroll button */}
      </button>

      <div className="categories" ref={scrollRef}> {/* Scrollable container with horizontal scroll */}
        <div className="category-scroll">
          {/* Map through each category to render it as a chip */}
          {categories.map((cat, i) => (
            <span
              key={i} // Unique key for each rendered element
              className="category-chip" // Style class for individual category chip
              onClick={() => handleCategoryClick(cat)} // Handle click to set selected category
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <button className="scroll-btn right" onClick={() => scroll('right')}>
        <FaChevronRight /> {/* Right scroll button */}
      </button>
    </div>
  );
};

export default Categories; // Export the component for use in other parts of the app
