import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser, fetchUserProfile } from "../api/api";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Frontend validation
  const validate = () => {
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter both email and password");
      return false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await loginUser(email, password);

      if (res.status) {
        // Save basic user info first in AuthContext
        login(res);

        // Fetch full profile
        const profile = await fetchUserProfile(res.uid, res.lkey);

        const fullUser = { ...res, ...profile };

        // Update AuthContext with full user
        login(fullUser);

        // ✅ Save user info in localStorage
        localStorage.setItem("uid", fullUser.uid);
        localStorage.setItem("lkey", fullUser.lkey);
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: fullUser.name,
            email: fullUser.username,
            ...profile, // optional: store address etc if profile returns it
          })
        );

        toast.success("Logged in successfully!");
        navigate("/"); // redirect to home/dashboard
      } else {
        toast.error(res.message || "Invalid login credentials");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while logging in");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-full min-h-screen px-4 py-12 flex flex-col">

      <div>
        <h1 className="text-[32px] font-bold leading-tight">Welcome Back!</h1>
        <p className="text-[16px] font-light text-gray-600">
          Enter your email to start shopping and get awesome deals today!
        </p>
      </div>

      <div className="pt-12 space-y-4">
        <form onSubmit={(e) => e.preventDefault()}>

          {/* Email Field */}
          <Input
            label="Email"
            icon="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          {/* Password Field with show/hide */}
          <div className="w-full bg-white rounded-xl shadow px-5 py-2 flex items-center gap-3 mb-3">
            <span className="material-symbols-rounded text-gray-700">lock</span>
            <div className="w-full">
              <label className="text-sm text-gray-800">Password</label>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-transparent focus:outline-none"
                />
                <span
                  className="material-symbols-rounded cursor-pointer text-gray-600 ml-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold mt-4 disabled:opacity-60"
            style={{ backgroundColor: 'var(--primary-color)' }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Skip Button */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full py-3 rounded-xl mt-3 border border-gray-300 text-gray-700 font-semibold"
          >
            Skip
          </button>

          {/* Register Link */}
          <p className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-var(--primary-color) font-semibold underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

/* ---------- Reusable Input Component ---------- */
function Input({ label, icon, value, onChange, placeholder }) {
  return (
    <div className="w-full bg-white rounded-xl shadow px-5 py-2 flex items-center gap-3 mb-3">
      <span className="material-symbols-rounded text-gray-700">{icon}</span>
      <div className="w-full">
        <label className="text-sm text-gray-800">{label}</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
}
