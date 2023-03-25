import React from 'react';
import './FeaturedSection.css';

const FeaturedSection = (props) => {
  return (
    <section className="featuredSection" id={props.id}>
      <h2 className="featuredTitle">{props.title}</h2>
      <div className="contentWrapper">
        <div className="textContent">
          <p>
            {props.paragraph}
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
