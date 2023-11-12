import React from 'react';

const Review = ({ name, location, rating, content, profileImage }) => {
    return (
        <div className="max-w-lg mx-auto p-4 my-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center mb-4">

                <div>
                    <p className="text-xl font-semibold text-gray-800">
                        "{content}"
                    </p>
                    <p className="text-gray-600 text-sm bold">
                        <img
                            src={`/images/${profileImage}`}
                            className="w-8 h-8 rounded-full mr-50"
                        />
                        {name} - {location}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <div className="bg-yellow-400 text-white rounded-full px-2 py-1 text-sm">
                    {rating} Stars
                </div>
            </div>
        </div>
    );
};

export default Review;
