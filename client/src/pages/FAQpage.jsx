import React, { useState } from 'react';

const faqData = [
    {
        question: 'What types of vehicles do you offer for rental?',
        answer: 'We offer a wide range of vehicles, including compact cars, SUVs, vans, and luxury vehicles to suit all your needs.',
    },
    {
        question: 'How can I make a reservation?',
        answer: 'Making a reservation is easy! Just visit our website, select your vehicle, dates, and location, and follow the steps to book.',
    },
    {
        question: 'Are there any age restrictions for renting a car?',
        answer: 'Yes, the minimum age requirement is 21 years old with a valid driver’s license. Drivers under 25 may incur a young driver surcharge.',
    },
    {

        question: 'Can I cancel or modify my reservation?',
        answer: 'Yes, you can cancel or modify your reservation at any time. Please contact our customer support team for assistance.',
    },
    {
        question: 'What if I need help with my reservation?',
        answer: 'If you need help with your reservation, please contact our customer support team. We are here to help!',
    },
    {

        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper. Massa sapien faucibus et molestie ac feugiat sed?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper. Massa sapien faucibus et molestie ac feugiat sed!',
    }



];

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="bg-white rounded-md shadow">
                        <button
                            onClick={() => toggleIndex(index)}
                            className="flex justify-between items-center w-full p-5 font-medium text-left text-gray-800 border-b border-gray-200"
                        >
                            <span>{faq.question}</span>
                            <span>{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        <div className={`p-5 border-t border-gray-200 ${activeIndex === index ? 'block' : 'hidden'}`}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
