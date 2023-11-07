// reviews.jsx

import React from "react";

const reviews = [
    {
        author: "John Doe",
        date: "October 10, 2023",
        content: "Great service! I'm very satisfied with the car detailing.",
    },
    {
        author: "Jane Smith",
        date: "September 25, 2023",
        content: "Excellent work! My car looks brand new.",
    },
    // Add more review objects as needed
];

function ReviewCard({ review }) {
    return (
        <div className="bg-white shadow-md rounded-md p-4 m-4">
            <div className="text-xl font-semibold">{review.author}</div>
            <div className="text-gray-600">{review.date}</div>
            <p className="mt-2">{review.content}</p>
        </div>
    );
}

function Reviews() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
    );
}

export default Reviews;
