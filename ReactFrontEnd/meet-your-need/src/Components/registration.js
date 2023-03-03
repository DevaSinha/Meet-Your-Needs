import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address,setAddress]=useState("");
  const [adhaarno, setAdhaarno] = useState("");
  const[errors,setErrors]=useState("");
  const [nationality,setNationality] = useState("");
  const navigate = useNavigate();
//   const [question,setQuestion] = useState("");
const [state, setState] = useState('');
  const [answer, setAnswer] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [validationError, setValidationError] = useState('');

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      setErrors(errors);
    } else {
      setErrors([]);
      alert("Registration successful!");
    }
    if (answer.trim() === '') {
        setValidationError('Answer is required');
        return;
      }
  };
  

  const validateForm = () => {
    const errors = [];

    if (fname.trim() === "") {
      errors.push("First name is required");
    }
    if (lname.trim() === "") {
        errors.push("Last name is required");
      }
    

    if (email.trim() === "") {
      errors.push("Email is required");
    } else if (!isValidEmail(email)) {
      errors.push("Invalid email format");
    }
    if (phoneno.trim() === "") {
        errors.push("Phone number is required");
      } else if (!isPhone(phoneno)) {
        errors.push("Invalid phone number format");
      }

    if (password.trim() === "") {
      errors.push("Password is required");
    }

    if (confirmPassword.trim() === "") {
      errors.push("Confirm password is required");
    } else if (password !== confirmPassword) {
      errors.push("Passwords do not match");
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation using regex
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  };
  const isPhone=(phoneno)=>{
    return /^\+?[1-9][0-9]{7,14}$/.test(phoneno);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="fname">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your first name"
          value={fname}
          onChange={(event) => setFname(event.target.value)}
        />
              </Form.Group>
        <Form.Group controlId="lname">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your last name"
          value={lname}
          onChange={(event) => setLname(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone no :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your phone number"
          value={phoneno}
          onChange={(event) => setPhone(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="birthdate">
        <Form.Label>Date of birth :</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter your birth date"
          value={birthdate}
          onChange={(event) => setBirthdate(event.target.value)}
          />
        </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="confirm-password">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="nationality">
        <Form.Label>Nationality</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Nationality"
          value={nationality}
          onChange={(event) => setNationality(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="adhaarno">
        <Form.Label>Adhaar no:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your adhaar no"
          value={adhaarno}
          onChange={(event) => setAdhaarno(event.target.value)}
        />
        </Form.Group>
        
        <Form.Group controlId="state">
        <Form.Label>Enter your State</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your State"
          value={state}
          onChange={(event) => setLname(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="city">
        <Form.Label>Enter your State</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </Form.Group>
      
      <Form.Group controlId="pincode">
        <Form.Label>Enter your Pincode</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your Pincode"
          value={pincode}
          onChange={(event) => setPincode(event.target.value)}
        />
      </Form.Group>

        <Form.Group controlId="question">
        <Form.Label>Security Question </Form.Label>
        </Form.Group>
  {/* <option value="option1">what is your favourite color?</option>
  <option value="option2">in what city were you born?</option>
  <option value="option3">what is the name of your favourite pet?</option>
  <option value="option4">what highschool did you attend? </option>
  <option value="option5">what was the name of your elementary school? </option>
  <option value="option6">what was the make of your first car?</option>
  <option value="option7">what was your favourite food as a child?</option> */}

        
          {/* value={question}
          onChange={(event) => setQuestion(event.target.value)} */}
        
     
        <form onSubmit={handleSubmit}>
      <label htmlFor="answer">
          <select>
          <option value="option1">what is your favourite color?</option>
  <option value="option2">in what city were you born?</option>
  <option value="option3">what is the name of your favourite pet?</option>
  <option value="option4">what highschool did you attend? </option>
  <option value="option5">what was the name of your elementary school? </option>
  <option value="option6">what was the make of your first car?</option>
  <option value="option7">what was your favourite food as a child?</option>
          </select>

      </label>
      <input type="text" id="answer" placeholder ="Your Answer" value={answer} onChange={(event) => setAnswer(event.target.value)} />
      {validationError && <p>{validationError}</p>}
      <button type="submit">Submit</button>
    </form>

      
        
      {errors.length > 0 && (
        <Alert variant="danger">
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </Alert>
      )}
    <br/>
      <Button variant="primary" type="submit" >
        Register
      </Button>
    </Form>
  );
}

export default RegistrationForm;
