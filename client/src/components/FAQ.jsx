import React, { useState } from 'react';

const FAQ = () => {
    const faqData = [
        {
            id: 1,
            question: 'What types of vehicles do you offer for rental?',
            answer:
                'We offer a wide range of vehicles, including compact cars, SUVs, vans, and luxury vehicles. You can choose the vehicle type that suits your needs and preferences.',
        },
        {
            id: 2,
            question: 'How can I make a reservation?',
            answer:
                'Making a reservation is easy! Simply visit our website, select your pickup and drop-off locations, choose your desired vehicle, and follow the steps to complete your reservation online. You can also contact our customer support for assistance.',
        },
        {
            id: 3,
            question: 'Are there any age restrictions for renting a car?',
            answer:
                'To rent a car, you must be at least 21 years old with a valid driver\'s license. Some rental categories may require the driver to be 25 years or older. Additional age-related fees may apply.',
        },
        {
            id: 4,
            question: 'Can I cancel or modify my reservation?',
            answer:
                'Yes, you can cancel or modify your reservation at any time. Please contact our customer support team for assistance.',
        },
        {
            id: 5,
            question: 'What if I need help with my reservation?',
            answer:
                'If you need help with your reservation, please contact our customer support team. We are here to help!',
        }

    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section id="faq" className="bgwhite py-16">
            <div className=" max-w-screen-md mx-auto p-4">
                <h2 className="text-3xl font-semibold text-center mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600 text-center mb-8">
                    Find answers to common questions about our car rental service.
                </p>
                {faqData.map((faq, index) => (
                    <div key={faq.id} className="mb-4">
                        <div
                            onClick={() => toggleAnswer(index)}
                            className="flex justify-between items-center cursor-pointer p-4 bg-gray-100 rounded-lg"
                        >
                            <p className="text-xl font-medium">{faq.question}</p>
                            <span className={`transform ${activeIndex === index ? 'rotate-180' : ''} transition-transform`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </div>
                        <div
                            className={`p-4 border rounded-lg shadow-md ${activeIndex === index ? 'block' : 'hidden'}`}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
