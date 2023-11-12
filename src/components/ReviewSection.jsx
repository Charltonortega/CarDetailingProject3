import React, { useState } from 'react';
import Review from './Review';
import reviewsData from '../data/reviewsdata';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReviewsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <section className="text-center py-12">
      <h2 className="text-3xl font-semibold mb-4">Customer Reviews</h2>
      <p className="text-gray-600 mb-8">
        Read what our customers have to say about their experiences.
      </p>
      <Carousel
        selectedItem={selectedIndex}
        onChange={handleSelect}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        thumbWidth={250}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        emulateTouch={true}
      >
        {reviewsData.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </Carousel>
    </section>
  );
};

export default ReviewsSection;