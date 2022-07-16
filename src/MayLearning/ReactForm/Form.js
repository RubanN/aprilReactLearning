import React, { useState } from "react";
import "./from.css"
const Form = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [valid, setValid] = useState(false);

    const handleChangeFirstName = (event) => {
        event.persist()
        setValues((values) => ({
            ...values,
            firstName: event.target.value
        }))
    }
    const handleChangeLastName = (event) => {
        event.persist()
        setValues((values) => ({
            ...values,
            lastName: event.target.value
        }))
    }
    const handleChangeEmail = (event) => {
        event.persist()
        setValues((values) => ({
            ...values,
            email: event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
        if (values.firstName && values.lastName && values.email) {
            setValid(true)
        }
        setShowSuccess(true);


    }

    return (
        <form class='register-form' onSubmit={handleSubmit}>
            <input
                id="first-name"
                class="form-field"
                type="text"
                disabled={showSuccess}
                placeholder="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChangeFirstName}

            />
            {submitted && !values.firstName && <span id="first-name-error">Please enter a first name</span>}

            <input
                id="last-name"
                class="form-field"
                type="text"
                disabled={showSuccess}

                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChangeLastName}

            />
            {submitted && !values.lastName && <span id="last-name-error">Please enter a last name</span>
            }

            <input
                id="email"
                class="form-field"
                type="text"
                disabled={showSuccess}

                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChangeEmail}

            />
            {submitted && !values.email && <span id="email-error">Please enter an email address</span>
            }

            <button class="form-field" type="submit">
                Register
            </button>
            {showSuccess && <div class='success-message'>Success! Thank you for registering</div>}

        </form>
    )
}

export default Form