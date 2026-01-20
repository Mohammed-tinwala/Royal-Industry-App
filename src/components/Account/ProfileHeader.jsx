import { useAuth } from "../../context/AuthContext";
import ProfileImg from "../../assets/avatar.jpg";
import UserAvatar from "../UserAvatar/UserAvatar";
import { Link } from "react-router-dom";

export default function ProfileHeader() {
  const { user } = useAuth();

  // console.log("ProfileHeader user:", user);

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-3xl p-4 flex items-center justify-between">

      {/* Profile Image */}
      {/* <img
        src={user?.profileImage || ProfileImg}
        alt="Profile"
        className="w-16 h-16 rounded-full object-cover"
      /> */}
      <div className="flex w-full items-center gap-3">
        <UserAvatar size={45} name={user?.name || "Guest User"} />

        <div className="w-[80%] overflow-hidden">
          <h3 className="text-xl font-semibold text-gray-800">
            {user?.name || "Guest User"}
          </h3>

          <p className="text-gray-500 text-sm 
                w-[80%] 
                overflow-hidden 
                whitespace-nowrap 
                text-ellipsis">
            {user?.email || "example@gmail.com"}
          </p>
        </div>

      </div>

      <button className="text-gray-600 text-xl">
        <Link to="/edit-profile" className="material-symbols-rounded">
          edit_square
        </Link>
      </button>
    </div>
  );
}
