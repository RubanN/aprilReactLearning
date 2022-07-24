import { useState } from 'react';
const initialState = {
    name: '',
    country: '',
    salary: null,
};
const ResetReact = () => {
    const [employee, setEmployee] = useState(initialState);
    const updateState = () => {
        setEmployee({ ...initialState, name: "ruban", country: "india" })
    }
    const resetState = () => {
        setEmployee(initialState);

    }

    return (
        <div>
            <button onClick={updateState}>Set Status</button>
            <button onClick={resetState}>Reset </button>
            <h4>{JSON.stringify(employee, null, 4)}</h4>

        </div>
    )
};

export default ResetReact;
