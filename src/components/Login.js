import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { APP_LOGO, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // using or selecting or subscribing
  // const user = useSelector((store) => store.user.value);
  // console.log(user);

  const handleButtonClick = (e) => {
    e.preventDefault();

    const message = validateData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    // Sign up user then login

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { photoURL } = auth.currentUser;
              dispatch(addUser({ photoURL }));
            })
            .catch((error) => {
              // An error occurred
              // ...
              const errorCode = error.code;
              const errorMessage = error.message;

              console.log(errorCode + "-" + errorMessage);
              setErrorMessage(errorCode + "-" + errorMessage);
            });
          // redirect to browser
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);

          // ..
        });
    } else {
      // sign in login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        {/* Background image */}
        <img src={APP_LOGO} alt="netflix_bg_img" />
      </div>
      <form
        className="w-3/12 absolute bg-black p-12 py-20 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80"
        onSubmit={handleButtonClick} // Use onSubmit for form submission
      >
        <h1 className="font-bold text-3xl py-4 my-2 font-sans">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="m-2 p-4 w-full rounded-lg bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="m-2 p-4 w-full rounded-lg bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-2 p-4 w-full rounded-lg bg-gray-700"
        />
        <p className="mx-2 font-bold font-sans text-red-600 text-lg">
          {errorMessage}
        </p>
        <button
          onClick={handleButtonClick}
          type="submit"
          className="m-2 p-2 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="my-4 mx-2 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
