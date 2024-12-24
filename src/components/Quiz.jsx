import React, { useState } from 'react';
import UserDetails from './UserDetails';
import Timer from './Timer';
import QuizData from './QuizData';
import Pending from './Pendign';
import Result from './Result';

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [isQuizEnd, setIsQuizEnd] = useState(false);
    const [attemptedQuestions, setAttemptedQuestions] = useState([]);
    const [showResultModal, setShowResultModal] = useState(false); // Modal visibility state

    const handleOptionClick = (Option) => {
        setSelectedOption(Option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === QuizData[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        if (selectedOption) {
            if (!attemptedQuestions.includes(currentQuestionIndex)) {
                setAttemptedQuestions([...attemptedQuestions, currentQuestionIndex]);
            }
        }

        setSelectedOption(null);

        if (currentQuestionIndex === QuizData.length - 1) {
            handleSubmitQues();
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrequestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmitQues = () => {
        setScore(score);
        setIsQuizEnd(true); // Mark the quiz as ended
        setShowResultModal(true); // Show result modal
    };

    const closeModal = () => {
        setShowResultModal(false); // Close the modal
        setIsQuizEnd(false);
        setSelectedOption(null)
        setCurrentQuestionIndex(0)
        setAttemptedQuestions([])
        
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-purple-500">
            {/* Render the quiz questions */}
            {!showResultModal && (
                <div className="grid grid-cols-3 gap-10 m-10">
                    {/* User details section */}
                    <UserDetails />

                    {/* Question section */}
                    <div className="bg-gradient-to-r from-lime-400 to-lime-500 flex flex-col pt-10 px-10 my-10 rounded-md">
                        <Timer isQuizEnd={isQuizEnd} />

                        <div className="text-center font-bold text-lg mb-5">Quiz Application</div>

                        <div className='flex-col justify-center items-center'>
                            {/* Question */}
                            <div className="mb-4 text-lg font-medium h-16">
                                {QuizData[currentQuestionIndex].question}
                            </div>

                            {/* Options */}
                            <div>
                                {QuizData[currentQuestionIndex].Option.map((Option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleOptionClick(Option)}
                                        className={`block w-full py-2 px-4 mb-2 rounded ${
                                            selectedOption === Option
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    >
                                        {Option}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 mt-10">
                                {/* Previous Button */}
                                <div className="flex justify-center">
                                    <button
                                        onClick={handlePrequestion}
                                        className="py-2 px-5 rounded bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        Previous
                                    </button>
                                </div>

                                {/* Next Button */}
                                <div className="flex justify-center">
                                    {currentQuestionIndex === QuizData.length - 1 ? (
                                        <button
                                            className="py-2 px-5 rounded bg-gray-400 text-white cursor-not-allowed"
                                            disabled
                                        >
                                            Next
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleNextQuestion}
                                            className="py-2 px-5 rounded bg-green-500 hover:bg-green-600 text-white"
                                        >
                                            Next
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center mt-5">
                                <button
                                    onClick={handleSubmitQues}
                                    className="py-2 px-5 rounded bg-green-500 hover:bg-green-600 text-white"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Pending section */}
                    <div className="mt-10 mr-10">
                        <Pending
                            currentQuestionIndex={currentQuestionIndex}
                            totalQuestions={QuizData.length}
                            attemptedQuestions={attemptedQuestions}
                        />
                    </div>
                </div>
            )}

            {/* Show result modal when quiz ends */}
            {showResultModal && (
                <Result
                    score={score}
                    totalQuestions={QuizData.length}
                    onClose={closeModal} // Close modal when user clicks "Close"
                />
            )}
        </div>
    );
}

export default Quiz;
