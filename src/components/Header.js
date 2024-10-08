import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/config";

const Header = () => {
  const [language, setLanguage] = useState("en");
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLanguage(language));
  }, [language]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
  const handlesignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("error :", error);
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div className="z-10 w-screen absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex text-center p-4">
          <select
            className="p-2 m-2 rounded-md bg-gray-800 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 my-2 mx-4 bg-green-500 bg-opacity-80 hover:bg-white hover:text-black hover:bg-opacity-100 rounded-full text-white text-center"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-10 h-10" src={user?.photoURL} alt="usericon"></img>
          <h3 className="text-white text-center">{user?.displayName}</h3>
          <button onClick={handlesignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
