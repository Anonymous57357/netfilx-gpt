import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        {/* login form */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
          alt="netfilx_bg_img"
        ></img>
      </div>
      <form className="w-3/12 absolute bg-black p-12 py-20 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 my-2 font-sans">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="name"
            placeholder="Full Name"
            className="m-2 p-4 w-full rounded-lg bg-gray-700"
            style={{ backgroundColor: "#374151" }} // Fallback for bg-gray-700
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="m-2 p-4 w-full rounded-lg bg-gray-700"
          style={{ backgroundColor: "#374151" }} // Fallback for bg-gray-700
        />

        <input
          type="password"
          placeholder="Password"
          className="m-2 p-4 w-full rounded-lg bg-gray-700"
          style={{ backgroundColor: "#374151" }} // Fallback for bg-gray-700
        />

        <button
          onClick={toggleSignInForm}
          type="button"
          className="m-2 p-2 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>

        <p onClick={toggleSignInForm} className="my-4 mx-2 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Aready registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
