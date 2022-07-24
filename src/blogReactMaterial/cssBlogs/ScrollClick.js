import { useRef } from 'react';

const ScrollClick = () => {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollInfoView({ behavior: 'smooth' })
    }
    return (
        <>
            <button onClick={handleClick}>Scroll to element</button>
            <div style={{ height: '155rem' }} />

            <div ref={ref}>Some content here</div>

            <div style={{ height: '155rem' }} />
        </>
    )
};
export default ScrollClick
