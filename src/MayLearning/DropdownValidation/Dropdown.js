import React, { useState, useCallback } from 'react';
import Select from './Select';
import "./style.css"

const countryList = [
    { value: "india", label: "India" },
    { value: "us", label: "US" },
    { value: "australia", label: "Australia" }
];
const languageList = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "arabic", label: "Arabic" }
];
const Dropdown = () => {
    const [form, setForm] = useState({
        country: null,
        lang: null
    });
    const [error, setError] = useState({
        country: {
            isReq: true,
            errorMsg: "",
            onValidateFunc: onValidate
        },
        lang: {
            isReq: true,
            errorMsg: "",
            onValidateFunc: onValidate
        }
    })
    const onValidate = (value, name) => {
        setError(prev => ({
            ...prev,
            [name]: { ...prev[name], errorMsg: value }
        }))
    }
    const onHandleChange = useCallback((value, name) => {
        setError(prev => ({
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
                onValidate(true, x)
            }
        })
        return !isInvalid;

    }

    return (
        <div>Dropdown</div>
    )
}

export default Dropdown