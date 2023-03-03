import { useReducer, useEffect } from "react";
import React, { useState } from "react";
export default function FormWithValidation() {
    const [answer, setAnswer] = useState('');
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/allQuestions")
            .then(response => response.json())
            .then(data => { setQuestions(data); })
    }
    )

    const [statevalue, setStateValue] = useState('');
    const handleStateIdChange = (event) => {
        setStateValue(event.target.value);
    }
    const [city, setCity] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/getcitybystate?state=" + Number(statevalue))
            .then(response => response.json())
            .then(data => { setCity(data); })
    }
    )

    const [states, setstate] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/allState")
            .then(response => response.json())
            .then(data => { setstate(data); })
    }
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:8080/addUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(state)
        })
          .then(response => {
            console.log("sucess");
          })
          .catch(error => {
            console.log("error");
          });
      };

    const init = {

        fname: { value: "", hasError: true, touched: false, error: "" },
        lname: { value: "", hasError: true, touched: false, error: "" },
        phone: { value: "", hasError: true, touched: false, error: "" },
        address: { value: "", hasError: true, touched: false, error: "" },
        city: { value: "", hasError: false, touched: false, error: "" },
        bday: { value: "", hasError: true, touched: false, error: "" },
        password: { value: "", hasError: true, touched: false, error: "" },
        cpassword: { value: "", hasError: true, touched: false, error: "" },
        email1: { value: "", hasError: true, touched: false, error: "" },
        pincode: { value: "", hasError: true, touched: false, error: "" },
        state1: { value: "", hasError: false, touched: false, error: "" },
        nationality: { value: "", hasError: true, touched: false, error: "" },
        security: { value: "", hasError: false, touched: false, error: "" },
        isFormValid: false
    }

    const reducer = (state, action) => {
        //console.log(state);
        switch (action.type) {
            case 'update': {
                const { name, value, hasError, error, touched, isFormValid } = action.data;
                return {
                    ...state,
                    [name]: { ...state[name], value, hasError, error, touched },
                    isFormValid
                }   //modifying and returning new object as state
            }

            case 'reset': {
                return init;
            }
        }
    }


    const handleChange = (name, value) => {
        const { hasError, error } = validate(name, value);
        let isFormValid = true;
        //check isFormValid
        for (let key in state) {
            if (state[key].hasError === true) {
                isFormValid = false;
                break;
            }
        }

        dispatch({ type: 'update', data: { name, value, hasError, error, touched: true, isFormValid } })
    }


    const validate = (name, value) => {
        let hasError = false;
        let error = "";
        switch (name) {
            case 'empno':
                var re = /^[0-9]{4}$/;
                if (!re.test(value)) {
                    hasError = true;
                    error = "only 4 digits"
                }
                break;
            case 'fname':
                var re1 = /^[A-Z][a-z]{2,15}$/;
                if (!re1.test(value)) {
                    hasError = true;
                    error = "First letter - capital, rest -small"
                }
                break;
            case 'lname':
                {
                    var re2 = /^[A-Z][a-z]{2,15}$/;
                    if (!re2.test(value)) {
                        hasError = true;
                        error = "First letter - capital, rest -small"
                    }
                    break;
                }
            case 'phone':
                {
                    var phone = /^\d{10}$/;
                    if (!phone.test(value)) {
                        hasError = true;
                        error = "Invalid Phone Number"
                    }
                    break;
                }
            case 'email1':
                {
                    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
                        hasError = true;
                        error = "Enter Valid Email Address"
                    }
                    break;
                }
            /*case 'city':
                {
                    if (!/^[A-za-z]$/.test(value)) {
                        error = "City Is Invalid";
                    }
                }
                break;
            case 'pincode':
                {
                    if (!/^\d{6}$/.test(value)) {
                        error = "Pincode is Invalid"
                    }
                }
                break;
                */
            case 'password':
                {
                    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value)) {
                        hasError = true;
                        error = "Should Contain Characters And Numbers"
                    }
                }
                break;
            case 'cpassword':
                {
                    const password = document.getElementById("password").value;
                    if (password !== value) {
                        hasError = true;
                        error = "Password is not matched"
                    }
                }


            case 'sal':
                break;
            case 'dept':
                break;

        }
        return { hasError, error }
    }


    const [state, dispatch] = useReducer(reducer, init);

    return (<div>
        <h2> RegistrationForm </h2>
        <form method="post" onSubmit={handleSubmit}>

            Enter first name :
            <input type="text" name="fname"
                value={state.fname.value}
                onChange={(e) => { handleChange("fname", e.target.value) }} />
            <p style={{ display: state.fname.touched && state.fname.hasError ? "block" : "none", color: "red" }}> {state.fname.error} </p>
            <br />
            Enter last name :
            <input type="text" name="lname"
                value={state.lname.value}
                onChange={(e) => { handleChange("lname", e.target.value) }} />
            <p style={{ display: state.lname.touched && state.lname.hasError ? "block" : "none", color: "red" }}> {state.lname.error} </p>
            <br />
            Enter Your Email Id :
            <input type="email" name="email1"
                value={state.email1.value}
                onChange={(e) => { handleChange("email1", e.target.value) }} />
            <p style={{ display: state.email1.touched && state.email1.hasError ? "block" : "none", color: "red" }}> {state.email1.error} </p>
            <br />
            Enter Your BirthDate :
            <input type="date" name="bday"
                value={state.bday.value}
                onChange={(e) => { handleChange("bday", e.target.value) }} />
            <p style={{ display: state.bday.touched && state.bday.hasError ? "block" : "none", color: "red" }}> {state.bday.error} </p>
            <br />
            Enter Your City:
            <label htmlFor="city">
                <select name="city">
                    {city.map((city) => (

                        <option key={city.cityId} value={city.cityId}>
                            {city.cityName}
                        </option>
                    ))}
                </select>
            </label>
            Enter Your Password:
            <input type="password" name="password" id="password"
                value={state.password.value}
                onChange={(e) => { handleChange("password", e.target.value) }} />
            <p style={{ display: state.password.touched && state.password.hasError ? "block" : "none", color: "red" }}> {state.password.error} </p>
            <br />
            Enter Confirm Password:
            <input type="password" name="cpassword"
                value={state.cpassword.value}
                onChange={(e) => { handleChange("cpassword", e.target.value) }} />
            <p style={{ display: state.cpassword.touched && state.cpassword.hasError ? "block" : "none", color: "red" }}> {state.cpassword.error} </p>
            <br />
            Enter phone number :
            <input type="text" name="phone"
                value={state.phone.value}
                onChange={(e) => { handleChange("phone", e.target.value) }} />
            <p style={{ display: state.phone.touched && state.phone.hasError ? "block" : "none", color: "red" }}> {state.phone.error} </p>
            <br />
            Enter Your Address :
            <input type="text" name="address"
                value={state.address.value}
                onChange={(e) => { handleChange("address", e.target.value) }} />
            <p style={{ display: state.address.touched && state.address.hasError ? "block" : "none", color: "red" }}> {state.address.error} </p>
            <br />
            Enter Pincode :
            <input type="number" name="pincode"
                value={state.pincode.value}
                onChange={(e) => { handleChange("pincode", e.target.value) }} />
            <p style={{ display: state.pincode.touched && state.pincode.hasError ? "block" : "none", color: "red" }}> {state.pincode.error} </p>
            <br />
            Enter Your State :
            <label htmlFor="states">
                <select value={statevalue} onChange={handleStateIdChange}>
                    {states.map((states) => (

                        <option key={states.stateId} value={states.stateId}>
                            {states.stateName}
                        </option>
                    ))}
                </select>
            </label>
            Enter Your Nationality :
            <input type="text" name="nationality"
                value={state.nationality.value}
                onChange={(e) => { handleChange("nationality", e.target.value) }} />
            <p style={{ display: state.nationality.touched && state.nationality.hasError ? "block" : "none", color: "red" }}> {state.nationality.error} </p>
            <br />
            Enter Your Security Question :
            <label htmlFor="answer">
                <select name="answer">
                    {questions.map((question) => (
                        <option key={question.qid} value={question.qid}>
                            {question.questionText}
                        </option>
                    ))}
                </select>
            </label>
            <input type="text" id="answer" placeholder="Your Answer" value={answer} onChange={(event) => setAnswer(event.target.value)} />

            <p style={{ display: state.security.touched && state.security.hasError ? "block" : "none", color: "red" }}> {state.security.error} </p>
            <br />
            <input type="button" value="Register" disabled={state.isFormValid ? false : true} onClick={handleSubmit}
            />  &nbsp; &nbsp;
            <input type="reset" value="Clear"
                onClick={() => { dispatch({ type: 'reset' }) }} />

        </form>
        <br />
        {
            JSON.stringify(state)
        }
    </div>)
}