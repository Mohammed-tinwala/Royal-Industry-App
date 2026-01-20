import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileHeader from "../components/Account/ProfileHeader";
import { useAuth } from "../context/AuthContext";

export default function Account() {
  const { logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    logout();
    setShowModal(false);
  };

  return (
    <div className="w-full min-h-screen pb-10 flex flex-col justify-between">
      {/* Top Gradient Header */}
      <div className="w-full px-2 pb-4">
        <ProfileHeader />
      </div>

      {/* Menu Sections */}
      <div className="space-y-6 px-5 mb-10">
        <h2 className="text-gray-800 font-semibold mb-3">General</h2>
        <MenuItem icon="receipt" text="Transaction" />
        <MenuItem icon="bookmark" text="My Orders" />
        <MenuItem icon="list_alt_check" text="Saved Address" />
        <MenuItem icon="credit_card" text="Payment Methods" />
        <Link to="/term-policy">
          <MenuItem icon="contract" text="Terms & Policy" />
        </Link>

        <h2 className="text-gray-800 font-semibold mb-3">Help</h2>
        <Link to="/contact">
          <MenuItem icon="person" text="Get in Touch With Us" />
        </Link>
      </div>

      {/* Logout Button */}
      <div className="px-5 mb-6">
        <button
          onClick={() => setShowModal(true)}
          className="w-full py-3 rounded-xl text-white font-semibold"
          style={{ backgroundColor: "red" }}
        >
          Logout
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Subtle overlay */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: 0.3 }}
            onClick={() => setShowModal(false)} // click outside closes
          ></div>

          {/* Modal box */}
          <div className="bg-white rounded-xl p-6 w-11/12 max-w-sm relative z-10 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Logout</h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl bg-red-500 text-white font-semibold"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable Menu Item
function MenuItem({ icon, text }) {
  return (
    <div className="space-y-3 mb-3">
      <div className="w-full bg-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <span className={`material-symbols-rounded text-gray-700 text-2xl`}>
            {icon}
          </span>
          <span className="text-gray-700 text-lg">{text}</span>
        </div>
        <span className="material-symbols-rounded text-gray-400 text-2xl">
          chevron_right
        </span>
      </div>
    </div>
  );
}
