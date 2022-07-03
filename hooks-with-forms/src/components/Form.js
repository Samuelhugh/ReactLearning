import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    // Must Prevent Default browser behavior with Forms to keep State from being reset by the default page refresh
    e.preventDefault();
    // Now create a Javascript object to hold all the values
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log("WELCOME: " + newUser);
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <div>
          <label>First Name: </label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button>Submit Here</button>
      </form>

      <div>
        <h3>Your Form Data</h3>
        <p>
          <label>First Name: {firstName}</label>
        </p>
        <p>
          <label>Last Name: {lastName}</label>
        </p>
        <p>
          <label>Email: {email}</label>
        </p>
        <p>
          <label>Password: {password}</label>
        </p>
        <p>
          <label>Confirm Password: {confirmPassword}</label>
        </p>
      </div>
    </div>
  );
};

export default Form;

// Whats Best Practice for showing the form with javascript expressions
