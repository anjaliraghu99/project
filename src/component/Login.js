import React, { useState } from "react";
import "./Mo.css";
export default function Navbar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const validCredentials = [
    { email: "deepak@gmail.com", password: "123" },
    { email: "anjali@gmail.com", password: "123" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const matchedCredentials = validCredentials.find(
      (cred) => cred.email === username && cred.password === password
    );
    if (matchedCredentials) {
      setLoginStatus("Login Successfull");
    } else {
      setLoginStatus("Incorrect email & Password");
    }
  };
  return (
    <div className="container12  text=center my-10">
      <div className="loginform text=center">
        <h1 className="text-center text-primary mt-2 mb-4">Login Here !</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="exampleInputEmail1" className="form-label">
              {" "}
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="exampleInputEmail1" className="form-label1">
              {" "}
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary col-lg-l2  col-l2 mt-2 mb-3"
          >
            Login
          </button>
          {loginStatus && <p>{loginStatus}</p>}
        </form>
      </div>
    </div>
  );
}
