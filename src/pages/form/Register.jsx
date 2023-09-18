import { useState } from "react";
import "./form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "") {
      return toast.error("userName is required");
    }
    if (email === "") {
      return toast.error("email is required");
    }
    if (pass === "") {
      return toast.error("password is required");
    }
    if (confirmPass !== pass) {
      return toast.error("passwords don't matched");
    }
  };
  return (
    <div className="login-container">
      <ToastContainer theme="colored"/>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Register</h2>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
          placeholder="UserName"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(e) => setConfirmPass(e.target.value)}
          value={confirmPass}
          type="password"
          placeholder="Confirm Password"
        />
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Register;
