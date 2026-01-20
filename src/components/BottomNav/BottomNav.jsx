import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import "./BottomNav.css";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { icon: "home", path: "/" },
    { icon: "group", path: "/about" },
    { icon: "grid_view", path: "/products" },
    { icon: "person_outline", path: "/account" }
  ];

  const positions = ["18%", "37%", "63%", "82%"];

  // 🔥 Keep active index in sync with URL
  const getActiveFromPath = (path) => {
    const index = items.findIndex((item) => item.path === path);
    return index === -1 ? 0 : index;
  };

  const [active, setActive] = useState(getActiveFromPath(location.pathname));

  // 🔥 Detect location change (Back/Forward/Navigation)
  useEffect(() => {
    setActive(getActiveFromPath(location.pathname));
  }, [location.pathname]);

  return (
    <div className="navigation">
      <div className="inner-navigation">
        <motion.div
          animate={{ left: positions[active] }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="
            indicator
            w-16 h-16
            flex items-center justify-center
            -translate-x-1/2 z-10
          "
        >
          <span className="material-symbols-rounded text-[40px]">
            {items[active].icon}
          </span>
        </motion.div>

        <div className="flex justify-between text-white relative z-20 px-[30px] mt-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActive(index);
                navigate(item.path);
              }}
              className="w-1/4 flex items-center justify-center"
            >
              <motion.span
                className="material-symbols-rounded"
                animate={{
                  opacity: active === index ? 0 : 1,
                  scale: active === index ? 0.8 : 1
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                {item.icon}
              </motion.span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BottomNav;
