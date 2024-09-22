import React, { useEffect, useState } from 'react'

const Question6 = ({start}) => {
    const [time, setTime] = useState(start);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => ((prevTime) + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return <h1>{time} seconds</h1>;
}

export default Question6
