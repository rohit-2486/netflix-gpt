import { useState } from "react";
import Header from "./Header";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
   
    setIsSignInForm(!isSignInForm);
   
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="
        https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>

      <div>
        <form className="absolute bg-black my-48 mx-auto right-0 left-0 p-12 bg-opacity-70 w-3/12 text-white  rounded-lg ">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign up"} 
          </h1>

          {!isSignInForm && (
            <input 
            type="text"
            placeholder="Name"
            className="my-4 p-4 w-full bg-black bg-opacity-70 border border-white rounded-lg"
            />
          )}

          <input
            type="text"
            placeholder="Email Adress"
            className="my-4 p-4 w-full bg-black bg-opacity-70 border border-white rounded-lg"
          />
          <input
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

          <button className="my-6 p-1 w-full bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <p className="p-5 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now." : "Already register? Sign In Now"}  
          </p>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
