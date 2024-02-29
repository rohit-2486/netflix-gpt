import { useNavigate } from "react-router-dom";
import { auth } from "../utlis/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utlis/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utlis/contant"; 

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user =useSelector((store) => store.user);
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

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44   " src={LOGO} alt="Logo" />
      {user && (
        <div className="flex">
          <img alt="userIcon" className="w-12 h-12 m-3 p-3" src={user?.photoURL} />

          <button
            onClick={handleSignOut}
            className="bg-purple-500 m-2 p-2 w-6/12 h-12 text-white  rounded-lg"
          >
            (sign out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
