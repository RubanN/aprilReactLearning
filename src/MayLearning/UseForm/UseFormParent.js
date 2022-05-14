import React from 'react'
import useForm from "./useForm"
import "./style.css"
const UseFormParent = () => {

    //final submit function for use
    const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }
    //custom hook callback
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

    return (
        <div className="App">
            <form>
                <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
                {
                    errors.email && <h3>{errors.email}</h3>
                }
                <input minLength='8' type="password" name="password" placeholder="Password" onChange={handleChange} />
                {
                    errors.password && <h3>{errors.password}</h3>
                }

                <input type="text" minLength='5' required name="username" placeholder="username" onChange={handleChange} />
                {
                    errors.username && <h3>{errors.username}</h3>
                }
                <input type="submit" value="Submit" className="submit" />

            </form>
        </div>
    )
}

export default UseFormParent