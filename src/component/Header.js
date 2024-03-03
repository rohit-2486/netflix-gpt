import { useNavigate } from "react-router-dom";
import { auth } from "../utlis/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utlis/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utlis/contant";
import { toggleGptSearchView } from "../utlis/gptSlice"; 
import { changeLanguage } from "../utlis/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showGptSearchView =useSelector((store) => store.gpt.showGptSearchView);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
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
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => Unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => { 
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img className="w-44  mx-auto md:mx-0 " src={LOGO} alt="Logo" />
      {user && (
        <div className="flex  justify-between ">
         { showGptSearchView && ( <select className="p-2 m-2 rounded-md bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          <button
            onClick={handleGptSearch}
            className="  m-2 w-48 h-10 md:py-2 md:px-4 md:mx-4 md:my-2 bg-purple-500  text-white  rounded-lg"
          >
             {showGptSearchView ? "Home Page" :" GPT Search"}
          </button>
          <img
            alt="userIcon"
            className="hidden md:block w-10 h-10  "
            src={user?.photoURL}
          />

          <button
            onClick={handleSignOut}
            className="  m-2 w-36 h-10 md:py-2 md:px-4 md:mx-4 md:my-2 bg-purple-500  text-white  rounded-lg"
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
