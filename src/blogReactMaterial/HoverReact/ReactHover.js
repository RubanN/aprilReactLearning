import { useState } from 'react';

const ReactHover = () => {
    const [isHovering, setisHovering] = useState(false);
    const handleMouseEnter = () => {
        setisHovering(true)
    }
    const handleMouseLeave = () => {
        setisHovering(false)
    }
    return (
        <div>
            <div>
                <div
                    style={{
                        backgroundColor: isHovering ? 'salmon' : "",
                        color: isHovering ? "white" : ""
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Hover me
                </div>
            </div>


        </div>
    )
};

export default ReactHover;
