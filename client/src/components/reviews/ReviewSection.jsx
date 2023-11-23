import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Review from './Review';
import reviewsData from '../../data/reviewsData';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ReviewsSection = () => {
    return (
        <section id="reviews" className="text-center py-12 bg-gray-200">
            <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
            <p className="mb-8">Read what our customers have to say about their amazing rental experiences.</p>
            <Carousel
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-100-px"
            >
                {reviewsData.map(review => (
                    <Review key={review.id} {...review} />
                ))}
            </Carousel>
        </section>
    );
};

export default ReviewsSection;
