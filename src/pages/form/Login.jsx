import { useState } from "react";
import "./form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      return toast.error("email is required");
    }
    if (pass === "") {
      return toast.error("password is required");
    }
  };
  return (
    <div className="login-container">
      <ToastContainer/>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email" />
        <input onChange={(e) => setPass(e.target.value)} value={pass} type="text" placeholder="Password" />
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
