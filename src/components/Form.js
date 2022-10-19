import React from "react";
import usePost from "./useHooks/usePost";
import "./styles.css";

export default function Form() {
  const {
    name,
    setFullName,
    user,
    setUserName,
    mail,
    setEmail,
    pass,
    setPassword,
    submit,
  } = usePost();

  console.log(user);
  return (
    <div>
      <span>SIGN</span>
      <div className="container">
        <div className="form-div">
          <form onSubmit={submit}>
            <input
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            ></input>
            <input
              onChange={(e) => setUserName(e.target.value)}
              placeholder="User Name"
            ></input>
            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button className="btnSignUp" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
