import { useEffect, useState } from 'react';

const UpdateBoolean = () => {
    const [isLoading, setIsLoading] = useState(false);
    const toggleLoading = () => {
        setTimeout(() => {
            setIsLoading(current => !current);

        })
    }
    useEffect(() => {
        console.log('isLoaading', isLoading);
    }, [isLoading])
    return (
        <div>
            <button onClick={toggleLoading}>Toggle loading</button>
            {isLoading && <h1>Loading...</h1>}
        </div>
    )
};

export default UpdateBoolean;
