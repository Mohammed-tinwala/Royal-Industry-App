import { useAuth } from "../../context/AuthContext";

const UserAvatar = ({ size = 60 }) => {
  const { user, isAuthenticated } = useAuth();

  // compute initials safely
  const getInitials = (name) => {
    if (!name) return "GU";
    const parts = name.trim().split(" ");
    const initials = parts
      .filter(Boolean)
      .map((p) => p[0].toUpperCase())
      .join("");
    return initials.slice(0, 2);
  };

  // safe initials
  const initials = isAuthenticated ? getInitials(user.name) : "GU";

  const commonStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    overflow: "hidden",
    backgroundColor: user?.name ? "var(--primary-color)" : "#e0e0e0",
    color: "#fff",
    fontWeight: "bold",
    fontSize: size / 3,
    textTransform: "uppercase",
  };

  return <div style={commonStyle}>{initials}</div>;
};

export default UserAvatar;
