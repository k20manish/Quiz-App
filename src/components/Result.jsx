import React from 'react';

const Result = ({ score, totalQuestions, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 flex justify-center">Quiz Completed!</h2>
                <p className="text-lg mb-4 flex justify-center">Your final score is:</p>

                {/* Display Score */}
                <p className="text-4xl font-semibold mb-6 text-green-500 flex justify-center">
                    {score} / {totalQuestions}
                </p>

                {/* Close Button */}
               <div className='flex justify-center'>
               <button
                    onClick={onClose}
                    className="py-2 px-6 rounded bg-blue-500 text-white text-lg hover:bg-blue-600 transition duration-300 "
                >
                    Play again
                </button>
               </div>
            </div>
        </div>
    );
};

export default Result;
