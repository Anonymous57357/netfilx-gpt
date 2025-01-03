import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // susubscribe the user
  const user = useSelector((store) => store.user);
  console.log(user);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid, photoURL } = user;
        console.log(user);
        dispatch(addUser({ email, displayName, uid, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-10 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix_logo"
      ></img>
      {user && (
        <div className="flex">
          <img className="size-12 " alt="user_icon" src={user?.photoURL}></img>
          <button
            onClick={handleSignOut}
            className="ml-4 font-bold font-sans text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
