import React, { useEffect, useState } from "react";

const Timer = ({ isQuizEnd }) => {
    const [count, setCount] = useState(60);

    useEffect(() => {
        let timer;
        if (!isQuizEnd && count > 0) {
            timer = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
        }

        if (isQuizEnd || count === 0) {
            clearInterval(timer); // Stop the timer

        }
        if(count === 0){
            alert("Time's up")
        }

        return () => clearInterval(timer); // Cleanup interval on component unmount or state change
    }, [isQuizEnd, count]);

    return (
        <div className="bg-slate-600 flex justify-center rounded-lg">
            {count} seconds
        </div>
    );
};

export default Timer;
