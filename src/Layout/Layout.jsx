import { Outlet, useLocation } from "react-router-dom";
import UpperNav from "../components/UpperNav/UpperNav";
import BottomNav from "../components/BottomNav/BottomNav";

const Layout = () => {
  const location = useLocation();

  const hideBottomNav =
    location.pathname.startsWith("/product/") ||
    location.pathname === "/checkout" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/term-policy";

  return (
    <div className="min-h-screen flex flex-col">

      {/* TOP NAV (fixed) */}
      <UpperNav />

      {/* MAIN CONTENT */}
      <main
        className={`flex-1 pt-[70px] ${
          hideBottomNav ? "pb-6" : "pb-[100px]"
        }`}
      >
        <Outlet />
      </main>

      {/* BOTTOM NAV */}
      {!hideBottomNav && <BottomNav />}

    </div>
  );
};

export default Layout;
