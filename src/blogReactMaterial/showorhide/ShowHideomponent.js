import { useState } from 'react';

const ShowHideomponent = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = (event) => {
        // 👇️ toggle shown state
        setIsShown(cur => !cur)
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {isShown && (
                <div>
                    <h2>Some content here</h2>

                </div>
            )}
            {isShown && <Box />}
        </div>
    )
};
function Box() {
    return (
        <div>
            <h2>Box</h2>
        </div>
    );
}

export default ShowHideomponent;
