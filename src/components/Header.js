import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handlesignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out successfull");
        navigate("/");
      })
      .catch((error) => {
        console.error("error :", error);
        navigate("/error");
      });
  };
  return (
    <div className="z-10 w-screen absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="grid p-4">
          <img className="w-10 h-10" src={user?.photoURL} alt="usericon"></img>
          <h3>{user?.displayName}</h3>
          <button onClick={handlesignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
  