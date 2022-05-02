import React, { memo } from 'react';
import PropTypes from 'prop-types';


const getRegExp = (type) => {
    let regx = null;
    switch (type) {
        case "EMAIL":
            regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            break;
        case "URL":
            regx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
            break;
        default:
            break;
    }
    return regx
}
const validationHandler = (e, props) => {
    console.log(props)
    if (!props.onValidateFunc) return
    const { value, name } = e.target
    let msg = null
    if (!value && props.isReq) {
        msg = `Please enter ${props.title}.`;

    } else if (value && props.reqType && !getRegExp(props.reqType).test(value)) {
        msg = `Please enter valid ${props.title}.`;

    } else if (props.min && value.length < props.min)
        msg = `${props.title} must be at least ${props.min} characters long.`;
    else if (props.max && value.length > props.max) {
        msg = `${props.title} is more than ${props.max} characters long.`;
    }
    props.onValidateFunc(msg, name)
}
const Input = (props) => {
    console.log(props)
    const inputProps = {
        name: props.name,
        type: props.type,
        placeholder: props.placeholder || `enter ${props.title}`,
        className: props.className,
        value: props.value
    }
    return (
        <div>
            <label className="form-label">{props.title}</label>
            <input
                {...inputProps}
                onChange={e => props.onValidateFunc(e.target.value, e.target.name, e)}
                onBlur={e => validationHandler(e, props)}
            />
            {props.errorMsg && <span>{props.errorMsg === true ? `Please enter ${props.title}.` : props.errorMsg}</span>}
        </div>
    )
}

export default memo(Input)