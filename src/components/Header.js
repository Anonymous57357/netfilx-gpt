import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { APP_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // susubscribe the user
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showSelectionOption);

  const handleLanguageChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  const hadleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid, photoURL } = user;
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
      <img className="w-44" src={APP_LOGO} alt="netflix_logo"></img>
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="bg-gray-900 text-white p-1 m-1 font-sans font-normal rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={() => {
              hadleGptSearch();
            }}
            className="py-2 px-4 mx-4 my-2 mr-10 mt-4 bg-purple-800 text-white rounded-lg hover:bg-purple-600 font-sans"
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img className="w-12 h-12" alt="user_icon" src={user?.photoURL}></img>
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
