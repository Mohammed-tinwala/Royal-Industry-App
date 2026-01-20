import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function Register() {

    // States Array
    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const { login } = useAuth();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
    });

    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (!form.name.trim()) return toast.error("Full name is required");
        if (!form.email.trim()) return toast.error("Email is required");
        if (!/^\S+@\S+\.\S+$/.test(form.email))
            return toast.error("Invalid email address");
        if (!form.phone.trim()) return toast.error("Phone number is required");
        if (!/^[6-9]\d{9}$/.test(form.phone))
            return toast.error("Enter valid 10 digit phone number");
        if (!form.password.trim()) return toast.error("Password is required");
        if (form.password.length < 6)
            return toast.error("Password must be at least 6 characters");
        if (!form.address.trim()) return toast.error("Address is required");
        if (!form.city.trim()) return toast.error("City is required");
        if (!form.state.trim()) return toast.error("State is required");
        if (!form.zipcode.trim()) return toast.error("Zipcode is required");
        if (!agree) return toast.error("Please accept Terms & Privacy Policy");
        return true;
    };

    const handleRegister = async () => {
        if (validate() !== true) return;

        setLoading(true);

        try {
            const res = await registerUser(form);
            console.log("Signup Response:", res);

            if (res.status) {
                login({
                    uid: res.uid,
                    lkey: res.lkey,
                    user: {
                        name: res.name,
                        email: res.username,
                    },
                });

                toast.success("Account created successfully 🎉");

                navigate("/");
            } else {
                toast.error(res.error || "Registration failed");
            }
        } catch (err) {
            toast.error("Something went wrong");
            console.error(err);
        }

        setLoading(false);
    };

    return (
        <div className="w-full min-h-screen px-4 py-6">
            <h1 className="text-[32px] font-bold">Create Account</h1>
            <p className="text-gray-600 mb-6">
                Fill your details to continue
            </p>

            {/* Full Name */}
            <Input
                label="Full Name"
                icon="person"
                name="name"
                placeholder="Enter full name"
                onChange={handleChange}
            />

            {/* Email */}
            <Input
                label="Email"
                icon="mail"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
            />

            {/* Phone */}
            <Input
                label="Phone"
                icon="call"
                name="phone"
                placeholder="Enter phone number"
                onChange={handleChange}
            />

            {/* Password */}
            <div className="bg-white rounded-xl shadow px-5 py-2 flex items-center gap-3 mb-3">
                <span className="material-symbols-rounded">lock</span>
                <div className="w-full">
                    <label className="text-sm font-medium">Password</label>
                    <div className="flex items-center">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full bg-transparent outline-none"
                        />
                        <span
                            className="material-symbols-rounded cursor-pointer text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "visibility_off" : "visibility"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Address */}
            <Input
                label="Address"
                placeholder="Enter Address"
                icon="location_on"
                name="address"
                onChange={handleChange}
            />
            <Input
                label="City"
                placeholder="Enter City"
                icon="location_city"
                name="city"
                onChange={handleChange}
            />
            {/* State Dropdown */}
            <div className="bg-white rounded-xl shadow px-5 py-2 mb-3 flex items-center gap-3">
                <span className="material-symbols-rounded">map</span>
                <div className="w-full">
                    <label className="text-sm font-medium">State</label>
                    <select
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        className="w-full -ml-1 bg-transparent outline-none text-[15px] mt-1"
                    >
                        <option value="" disabled>
                            Select your state
                        </option>
                        {indianStates.map((stateName) => (
                            <option key={stateName} value={stateName}>
                                {stateName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <Input
                label="Zipcode"
                placeholder="Enter Zipcode"
                icon="pin"
                name="zipcode"
                onChange={handleChange}
            />

            {/* Terms */}
            <label className="flex gap-3 mt-4 text-sm">
                <input
                    type="checkbox"
                    className="w-5 h-5"
                    onChange={(e) => setAgree(e.target.checked)}
                />
                I agree to Terms & Privacy Policy
            </label>

            {/* Button */}
            <button
                onClick={handleRegister}
                disabled={loading}
                className="w-full mt-6 py-3 rounded-xl text-white font-semibold"
                style={{ backgroundColor: "var(--primary-color)" }}
            >
                {loading ? "Creating Account..." : "Register"}
            </button>

            {/* Skip Button */}
            <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full py-3 rounded-xl mt-3 border border-gray-300 text-gray-700 font-semibold"
            >
                Skip
            </button>

            <p className="text-center mt-4 text-sm">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold underline">
                    Login
                </Link>
            </p>
        </div>
    );
}

/* ---------- Reusable Input Component ---------- */
function Input({ label, icon, name, placeholder, onChange }) {
    return (
        <div className="bg-white rounded-xl shadow px-5 py-2 flex items-center gap-3 mb-3">
            <span className="material-symbols-rounded">{icon}</span>
            <div className="w-full">
                <label className="text-sm font-medium">{label}</label>
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="w-full bg-transparent outline-none"
                />
            </div>
        </div>
    );
}
