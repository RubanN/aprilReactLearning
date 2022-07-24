import { useState } from 'react';

export const BackgroundcolorChange = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
        return (
            <>
                <div style={{
                    backgroundColor: isActive ? "green" : "red",
                    color: isActive ? "white" : "",
                }}
                    onClick={handleClick}

                >
                    Hello world

                </div>
            </>
        )
    };
}
export default BackgroundcolorChange

