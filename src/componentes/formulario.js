import React, { useState } from "react";
const Form=()=>{
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[confirmPassword, setConfirmPassword]=useState("");
    const[madeSubmit, setMadeSubmit]=useState(false);

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validateFirstName = () => {
        if (firstName.length < 2) {
          setFirstNameError("First Name must be at least 2 characters");
        } else {
          setFirstNameError("");
        }
      };
    
      const validateLastName = () => {
        if (lastName.length < 2) {
          setLastNameError("Last Name must be at least 2 characters");
        } else {
          setLastNameError("");
        }
      };
      const validateEmail = () => {
        if (email.length < 5) {
          setEmailError("Email must be at least 5 characters");
        } else {
          setEmailError("");
        }
      };
    
      const validatePassword = () => {
        if (password.length < 8) {
          setPasswordError("Password must be at least 8 characters");
        } else {
          setPasswordError("");
        }
      };
      const validateConfirmPassword = () => {
        if (password !== confirmPassword) {
          setConfirmPasswordError("Passwords do not match");
        } else {
          setConfirmPasswordError("");
        }
      };

    const makeAccount = (e) => {
        e.preventDefault();
            validateFirstName();
            validateLastName();
            validateEmail();
            validatePassword();
            validateConfirmPassword();
        
    const newUser = {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
              };
              console.log(newUser);
              setMadeSubmit(true);
            };
        
    return(
        <div className="m-auto w-50 p-3">
            <h1 className="text-center">Create Account</h1>
            <h5>
                {madeSubmit ? "Thanks you account is ready to use":"Please fill in all the spaces"}
            </h5>
            <form onSubmit={makeAccount}className="">
                <div>
                    <label>First Name:</label>
                    <input type="text"className="form-control"onBlur={validateFirstName}onChange={e => setFirstName(e.target.value)}value={firstName}></input>{firstNameError && <p className="error">{firstNameError}</p>}
                </div>
                <div>
                    <label>lastName:</label>
                    <input type="text"className="form-control"onBlur={validateLastName}onChange={e => setLastName(e.target.value)}value={lastName}></input>{lastNameError && <p className="error">{lastNameError}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email"className="form-control"onBlur={validateEmail}onChange={e => setEmail(e.target.value)}value={email}></input>{firstNameError && <p className="error">{emailError}</p>}
                </div>
                <div>
                    <label>Pasword:</label>
                    <input type="password"className="form-control"onBlur={validatePassword}onChange={e => setPassword(e.target.value)}value={password}></input>{passwordError && <p className="error">{passwordError}</p>}
                </div>
                <div>
                    <label>confirm Password:</label>
                    <input type="password"className="form-control"onBlur={validateConfirmPassword}onChange={e => setConfirmPassword(e.target.value)}value={confirmPassword}></input>{confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
                </div>
                <div className="mt-2">
                    <input type="submit"className="btn btn-success"value="Create Account"></input>
                     </div>
            </form>
            {madeSubmit && (
            <div className="col-auto card mt-4 p-3 border-black">
            <h1 className="text-center">Results</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            </div>
        )}
            </div>
        
    );
};
export default Form;