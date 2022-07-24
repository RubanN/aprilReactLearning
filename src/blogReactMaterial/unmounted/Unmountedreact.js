import { useState, useEffect } from 'react';

const Unmountedreact = () => {
    const [state, setState] = useState('');
    useEffect(() => {
        // 👇️ set isMounted to true
        let isMounted = true;
        async function fetchData() {
            const res = await Promise.resolve(["Hello", "world"])
            // 👇️ only update state if component is mounted
            if (isMounted) {
                setState(res)
            }
        }
        fetchData();
        return () => {
            // 👇️ when component unmounts, set isMounted to false
            isMounted = false;
        }
    }, [])
    return (
        <div>
            <h2>State: {JSON.stringify(state)}</h2>

        </div>

    )
};

export default Unmountedreact;
