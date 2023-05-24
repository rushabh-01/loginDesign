import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // reset the email error message
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(""); // reset the email error message
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(email, password);
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    if (formSubmitted && email && !pattern.test(email)) {
      setError("Please enter a valid email address");
    }


    if (formSubmitted && email && pattern.test(email) && password.length >= 6 && password)
      alert("submitted successfully");
  };
  return (
    <>
      <div className="container">
        <img src="/tree-bg.png" className="bg-img" alt="tree" />

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="amazon-login">
            <img src="/amazon.png" alt="amazon" />
          </div>
          <div className="login-form-container">
            <h2 style={{ marginBottom: 20 }}>Login</h2>
            <img src="/tree.png" alt="tree" />
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
            />
            {formSubmitted && email === "" && (
              <div className="flex" style={{ gap: 10 }}>
                <img src="/alert.png" alt="alert" />
                <p className="err-msg">please enter email</p>
              </div>
            )}
            {error && (
              <div className="flex" style={{ gap: 10 }}>
                <img src="/alert.png" alt="alert" />
                <p className="err-msg">{error}</p>
              </div>
            )}

            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
            {formSubmitted && password.length < 6 && password !== "" && (
              <div className="flex" style={{ gap: 10 }}>
                <img src="/alert.png" alt="alert" />
                <p className="err-msg">
                  password should be more than 6 characters
                </p>
              </div>
            )}
            {formSubmitted && password === "" && (
              <div className="flex" style={{ gap: 10 }}>
                <img src="/alert.png" alt="alert" />
                <p className="err-msg">please enter password</p>
              </div>
            )}

            <button type="submit" style={{ marginTop: 30 }}>
              Sign in
            </button>

            <div className="flex justify-between pad1">
              <div>forgot password?</div>
              <div style={{ color: "red" }}>New user? Sign up.</div>
            </div>

            <p className="or-text">or</p>

            <div className="auth-container pad1">
              <button className="auth-btn">
                <img src="/google.png" alt="google" />
                <p>CONTINUE WITH GOOGLE</p>
                <p></p>
              </button>
              <button className="auth-btn">
                <img src="/fb.png" alt="fb" />
                <p>CONTINUE WITH FACEBOOK</p>
                <p></p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
