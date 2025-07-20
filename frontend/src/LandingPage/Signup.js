import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the toastify CSS

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { email, username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    console.log(setInputValue);
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("An error occurred during signup."); 
      if (error.response) {
        handleError(error.response.data.message || "Signup failed!");
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an http.ClientRequest in node.js
        handleError("No response from server. Check if backend is running.");
      } else {
        // Something happened in setting up the request that triggered an Error
        handleError("An unexpected error occurred.");
      }
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="signup-page-container"> 
      <div className="form_container">
        <h2 className="form-title">Signup Account</h2>
        <form onSubmit={handleSubmit} className="signup-form"> 
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              required
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              required
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              required
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
          <span className="login-link-text">
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;