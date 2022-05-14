import React, { useState, useCallback } from 'react';
import Input from "./Input"
const MinMaxValidate = () => {
    const [form, setForm] = useState({
        userId: '',
        ticketNumber: ''
    });

    const onInputValidate = (value, name) => {
        setError(prev => ({
            ...prev,
            [name]: { ...prev[name], errorMsg: value }
        }))
    }
    const [error, setError] = useState({
        userId: {
            isReq: true,
            errorMsg: '',
            onValidateFunc: onInputValidate

        },
        ticketNumber: {
            isReq: true,
            errorMsg: '',
            onValidateFunc: onInputValidate

        }
    })
    const onInputChange = useCallback((value, name) => {
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }, [])
    const validateForm = () => {
        let isInvalid = false;
        Object.keys(error).forEach(x => {
            const errObj = error[x];
            if (errObj.errorMsg) {
                isInvalid = true;
            } else if (errObj.isReq && !form[x]) {
                isInvalid = true;
                onInputValidate(true, x)
            }
        })
    }
    const handleSubmit = () => {
        const isValid = validateForm();
        if (!isValid) {
            console.error('Invalid Form!');
            return false;
        }
        console.log('Data:', form);

    }
    return (
        <div style={{
            width: "350px"
        }}>
            <Input
                type="number"
                name="userId"
                title="User Id"
                value={form.userId}
                min={6}
                onChangeFunc={onInputChange}
                {...error.userId}
            />

            <Input
                type="number"
                name="ticketNumber"
                title="Ticket Number"
                value={form.ticketNumber}
                max={8}
                onChangeFunc={onInputChange}
                {...error.ticketNumber}
            />
            <button
                onClick={handleSubmit}
            >Submit</button>


        </div>
    )
}

export default MinMaxValidate