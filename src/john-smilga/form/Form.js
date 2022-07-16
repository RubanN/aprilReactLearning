import React from "react";
import "./style.css"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
    firstName: yup.string().required("First Name should be required please"),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
const Form = () => {
    return (
        <div className="Form">
            <div className="title">Sign Up</div>

        </div>
    )
};

export default Form;
