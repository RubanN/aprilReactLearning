import { useNavigate } from 'react-router-dom';

const UseHistoryNotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // 👇️ navigate programmatically
        navigate('/about', { replace: true });
    };

    return (
        <div>
            <button onClick={handleClick}>Navigate to About</button>

        </div>
    )
};

export default UseHistoryNotFound;
