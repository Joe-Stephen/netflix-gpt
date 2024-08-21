import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGIN_BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    let message;
    if (!isSignInForm) {
      message = checkValidateData(
        fullName.current.value.trim(),
        email.current.value.trim(),
        password.current.value.trim()
      );
      setErrorMessage(message);
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value.trim(),
        password.current.value.trim()
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value.trim(),
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value.trim(),
        password.current.value.trim()
      )
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src={LOGIN_BACKGROUND_IMAGE}
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute mt-36 mx-auto right-0 left-0 p-12 bg-black bg-opacity-80 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="py-4 my-3 w-full bg-gray-700 bg-opacity-70 border-2 border-gray-500 rounded-md"
          />
        )}
        {errorMessage && errorMessage === "Name is not valid" ? (
          <p className="text-red-500 font-medium text-sm">{errorMessage}</p>
        ) : (
          ""
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="py-4 my-3 w-full bg-gray-700 bg-opacity-70 border-2 border-gray-500 rounded-md"
        />
        {errorMessage && errorMessage === "Email ID is not valid" ? (
          <p className="text-red-500 font-medium text-sm">{errorMessage}</p>
        ) : (
          ""
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-4 my-3 w-full bg-gray-700 bg-opacity-70 border-2 border-gray-500 rounded-md"
        />
        {errorMessage && errorMessage === "Password is not valid" ? (
          <p className="text-red-500 font-medium text-sm">{errorMessage}</p>
        ) : (
          <p className="text-red-500 font-medium text-sm">{errorMessage}</p>
        )}

        <button
          className="py-4 my-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now!"
            : "Already registered? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
