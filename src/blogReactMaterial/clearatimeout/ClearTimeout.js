import { useEffect, useState } from 'react';

const ClearTimeout = () => {
    const [isShown, setIsShown] = useState(false);
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const timeoutID = setTimeout(() => {
    //         setIsShown(true);
    //     }, 1000)
    //     return () => {
    //         // 👇️ clear timeout when component unmounts
    //         clearTimeout(timeoutID)
    //     }
    // }, [])

    useEffect(() => {
        const interlId = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)
        //👇️ cancel interval when component unmounts
        return () => {
            clearInterval(interlId);
        };
    }, [])

    return (
        <div>
            {isShown ? (
                <div>
                    <h2>isShown = true</h2>
                </div>
            ) : (
                <div>
                    <h2>isShown = false</h2>

                </div>
            )}
            <h2>Count: {count}</h2>


        </div>
    )
};

export default ClearTimeout;
