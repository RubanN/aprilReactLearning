import { useState } from 'react';

const ConditionalInitialValue = () => {
    // 👇️ passing function to useState
    const [num, setNum] = useState(() => {
        if (2 * 2 === 4) {
            return 4
        }
        return 42
    })
    return (
        <div>
            <h2>num is: {num}</h2>

            {/* <h2>str is: {str}</h2> */}
        </div>
    )
};

export default ConditionalInitialValue;
