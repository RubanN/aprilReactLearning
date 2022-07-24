import { useRef } from 'react';

const GetvalueCheckbox = () => {
    const ref = useRef(null);

    const handleClick = () => {
        // 👇️ get checkbox value with ref
        console.log(ref.current.checked);
    };
    return (
        <div>
            <input ref={ref} type="checkbox" id="subscribe" name="subscribe" />
            <button onClick={handleClick}>Click</button>

        </div>
    )
};

export default GetvalueCheckbox;
