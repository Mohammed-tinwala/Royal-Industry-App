import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import './UpperNav.css';
import UserAvatar from '../UserAvatar/UserAvatar';
import logo from '../../assets/logo.png';

const UpperNav = () => {
  const { user } = useAuth();
  const { cartCount } = useCart();

  const location = useLocation();
  const navigate = useNavigate();

  const pageTitles = {
    "/products": "All Products",
    "/cart": "My Cart",
    "/profile": "Profile",
    "/orders": "Orders",
    "/about": "About Us",
    "/categories": "Categories",
    "/account": "My Account",
    "/login": "Login",
    "/register": "Register",
    "/term-policy": "Terms & Policies",
    "/contact": "Contact Page",
    "/edit-profile": "Edit Page",
    "/notifications": "All Notifications"
  };

  // Routes where icons should be hidden
  const hideIconsRoutes = ["/login", "/register"];

  const hideIcons = hideIconsRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="fixed flex items-center justify-between w-full top-0 left-0 z-10 py-3 px-4 bg-(--background-color)">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">
        {location.pathname === "/" ? (
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Royal Industry"
              className="h-9 object-contain"
            />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button onClick={() => navigate(-1)}>
              <span className="material-symbols-rounded">
                arrow_back_ios
              </span>
            </button>

            <h1 className="font-semibold text-xl">
              {pageTitles[location.pathname] || "Page"}
            </h1>
          </div>
        )}
      </div>

      {/* RIGHT SECTION */}
      {!hideIcons && (
        <div className="flex items-center gap-4">

          {/* Notification Icon */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/notifications")}
          >
            <span className="material-symbols-rounded font-medium text-5xl text-gray-800">
              notifications
            </span>

            {/* Red dot / count */}
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>

          {/* 🛒 Cart Icon (optional — enable anytime) */}
          {/* 
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <span className="material-symbols-rounded text-[28px] text-gray-800">
              shopping_cart
            </span>

            {cartCount > 0 && (
              <div className="cart-badge bg-red-500 text-white">
                {cartCount}
              </div>
            )}
          </div> 
          */}

        </div>
      )}
    </div>
  );
};

export default UpperNav;
