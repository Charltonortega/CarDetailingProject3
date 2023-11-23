import { Icon } from '@iconify/react';
import quoteLeft from '@iconify/icons-fa-solid/quote-left';

const Review = ({ name, location, content, profileImage }) => {
    return (
        <div className="max-w-sm mx-auto p-4 my-4 bg-white shadow-lg rounded-lg">
            <Icon icon={quoteLeft} className="text-red-500 text-2xl" />
            <p className="text-gray-600 my-2">{content}</p>
            <div className="flex items-center mt-4">
                <img
                    src={profileImage}
                    alt={name}
                    className="w-16 h-16 rounded-full "
                />
                <div>
                    <p className="text-gray-600 text-lg font-bold ml-5">{name}</p>
                    <p className="text-gray-500 text-mmd ml-5">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
