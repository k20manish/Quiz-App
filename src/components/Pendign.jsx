 
const Pending = ({ currentQuestionIndex, totalQuestions, attemptedQuestions }) => {
    return (
        <div className="flex flex-wrap gap-2 bg-gradient-to-r from-blue-200 to-cyan-200 p-4 rounded shadow-md ">
            {Array.from({ length: totalQuestions }).map((_, index) => {
                const isAttempted = attemptedQuestions.includes(index);
                
                return (
                    <span
                        key={index}
                        className={`px-4 py-2 rounded-full text-white font-semibold ${
                            index === currentQuestionIndex
                                ? 'bg-blue-500'
                                : isAttempted  
                                ? 'bg-green-500'
                                : 'bg-gray-400'
                        }`}
                    >
                        {index + 1}
                    </span>
                );
            })}
        </div>
    );
};

export default Pending;
 