import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utlis/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utlis/firebase"; 
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userSlice";
import { AVTAR_LOGO } from "../utlis/contant";
import { USER_AVTAR } from "../utlis/contant";

const LogIn = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true); 
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // validate mail and password

    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    // signIn signUp logic
    if (message) return;

    //logic for signUp form
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: "name.current.value",
            photoURL: USER_AVTAR
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
    }
    //logic for signIn form
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user; 

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src={AVTAR_LOGO}   alt="Logo"
        />
      </div>

      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black my-24 mx-auto right-0 left-0 p-12 bg-opacity-70 w-3/12 text-white  rounded-lg "
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="my-4 p-4 w-full bg-black bg-opacity-70 border border-white rounded-lg"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Adress"
            className="my-4 p-4 w-full bg-black bg-opacity-70 border border-white rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-4 p-4 w-full  bg-black bg-opacity-70 border border-white rounded-lg"
          />

          {!isSignInForm && (
            <input
              type="password"
              placeholder="confirm password"
              className="my-4 p-4 w-full bg-black bg-opacity-70 border border-white rounded-lg"
            />
          )}

          <p className="text-red-600 font-bold text-xl py-2">{errorMessage}</p>

          <button
            className="my-6 p-1 w-full bg-red-700 rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <p className="p-5 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now."
              : "Already register? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
