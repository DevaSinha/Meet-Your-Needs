import React, { useReducer } from "react";

const initialState = {
  fname: "",
  lname: "",
  phone: "",
  address: "",
  email: "",
  state: "",
  city: "",
  pincode: "",
  birthday: "",
  nationality: "",
  errors: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, [action.field]: action.value };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
      case 'updateField':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' },
      };
    default:
      return state;
  }
};

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    if (!state.fname.trim()) {
      errors.fname = "First name is required";
    }

    if (!state.lname.trim()) {
      errors.lname = "Last name is required";
    }

    if (!state.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(state.phone.trim())) {
      errors.phone = "Phone number should be 10 digits";
    }

    if (!state.address.trim()) {
      errors.address = "Address is required";
    }

    if (!state.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(state.email.trim())
    ) {
      errors.email = "Invalid email format";
    }

    if (!state.state.trim()) {
      errors.state = "State is required";
    }

    if (!state.city.trim()) {
      errors.city = "City is required";
    }

    if (!state.pincode.trim()) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(state.pincode.trim())) {
      errors.pincode = "Pincode should be 6 digits";
    }

    if (!state.birthday.trim()) {
      errors.birthday = "Birthday is required";
    }

    if (!state.nationality.trim()) {
      errors.nationality = "Nationality is required";
    }

    if (Object.keys(errors).length === 0) {
      // Submit form
    } else {
      dispatch({ type: "SET_ERRORS", errors });
    }
  };

  const handleChange = (event) => {
    dispatch({
      type: "SET_VALUE",
      field: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={state.fname}
          onChange={handleChange}
        />
        {state.errors.fname && <div>{state.errors.fname}</div>}
      </div>
      <div>
        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={state.lname}
          onChange={handleChange}
        />
        {state.errors.lname && <div>{state.errors.lname}</div>}
      </div>
      <div>
        <label htmlFor="phone">Phone number:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={state.phone}
          onChange={handleChange}
        />
               {state.errors.phone && <div>{state.errors.phone}</div>}
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={state.address}
          onChange={handleChange}
        />
        {state.errors.address && <div>{state.errors.address}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {state.errors.email && <div>{state.errors.email}</div>}
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={state.state}
          onChange={handleChange}
        />
        {state.errors.state && <div>{state.errors.state}</div>}
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={state.city}
          onChange={handleChange}
        />
        {state.errors.city && <div>{state.errors.city}</div>}
      </div>
      <div>
        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={state.pincode}
          onChange={handleChange}
        />
        {state.errors.pincode && <div>{state.errors.pincode}</div>}
      </div>
      <div>
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={state.birthday}
          onChange={handleChange}
        />
        {state.errors.birthday && <div>{state.errors.birthday}</div>}
      </div>
      <div>
        <label htmlFor="nationality">Nationality:</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={state.nationality}
          onChange={handleChange}
        />
        {state.errors.nationality && <div>{state.errors.nationality}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
