import React from 'react';
import Review from '../components/reviews/Review';
import reviewsData from '../data/reviewsData';

const ReviewsPage = () => {
    return (
        <div className="container mx-auto px-4 my-10">
            <h2 className="text-3xl font-bold text-center mb-10">Our Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviewsData.map(review => (
                    <Review key={review.id} {...review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewsPage;
