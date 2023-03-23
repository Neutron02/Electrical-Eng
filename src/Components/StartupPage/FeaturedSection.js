import React from 'react';
import './FeaturedSection.css';

const FeaturedSection = () => {
  return (
    <section className="featuredSection">
      <h2 className="featuredTitle">Featured Content</h2>
      <div className="contentWrapper">
        <div className="textContent">
          <p>
            This is a sample paragraph to display in the featured section. You
            can replace this content with your own text and images to make it
            even more appealing to your users.
          </p>
        </div>
        <div className="imageContent">
          <img
            className="featuredImage"
            src="https://via.placeholder.com/300x200"
            alt="Sample"
          />
          <img
            className="featuredImage"
            src="https://via.placeholder.com/300x200"
            alt="Sample"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
