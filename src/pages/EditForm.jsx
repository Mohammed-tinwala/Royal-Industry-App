import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { editUser } from "../api/api";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function EditForm() {

    const navigate = useNavigate();
    const { user, login } = useAuth();

    // Prefill form with user data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");

    const [loading, setLoading] = useState(false);

    // Prefill inputs when user is available
    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || user.username || "");
            setPhone(user.phone || "");
            setAddress(user.address || "");
            setCity(user.city || "");
            setState(user.state || "");
            setZipcode(user.zipcode || "");
        }
    }, [user]);

    // -------- Frontend Validation --------
    const validateForm = () => {
        if (!name.trim()) return toast.error("Full name is required");
        if (!email.trim()) return toast.error("Email is required");
        if (!/^\S+@\S+\.\S+$/.test(email)) return toast.error("Invalid email address");
        if (phone && !/^[6-9]\d{9}$/.test(phone)) return toast.error("Phone must be a valid 10-digit number");
        if (!address.trim()) return toast.error("Address is required");
        if (!city.trim()) return toast.error("City is required");
        if (!state.trim()) return toast.error("State is required");
        if (!zipcode.trim()) return toast.error("Zipcode is required");
        return true;
    };

    const handleEditForm = async () => {
        if (validateForm() !== true) return;

        setLoading(true);

        const userData = {
            uid: user.uid,
            name,
            email,
            phone,
            address,
            city,
            state,
            zipcode
        };

        try {
            const res = await editUser(userData);

            if (res.status) {
                toast.success(res.message || "Profile updated successfully 🎉");

                // Update AuthContext and localStorage
                const updatedUser = { ...user, ...userData };
                login(updatedUser);

                navigate("/account");
            } else {
                toast.error(res.error || "Failed to update profile");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong while updating profile");
        }

        setLoading(false);
    };

    return (
        <div className="w-full min-h-screen px-4 pb-6 flex flex-col">

            <div className="mb-4">
                <h1 className="text-[32px] font-bold">Edit Profile</h1>
                <p className="text-gray-600">Update your personal information</p>
            </div>

            <form className="space-y-3">

                <Input label="Full Name" value={name} onChange={setName} />
                <Input label="Email" type="email" value={email} onChange={setEmail} />
                <Input label="Phone" value={phone} onChange={setPhone} />
                <Input label="Address" value={address} onChange={setAddress} />
                <Input label="City" value={city} onChange={setCity} />
                <Input label="State" value={state} onChange={setState} />
                <Input label="Zipcode" value={zipcode} onChange={setZipcode} />

                <button
                    type="button"
                    onClick={handleEditForm}
                    disabled={loading}
                    className="w-full py-3 rounded-xl text-white font-semibold disabled:opacity-60"
                    style={{ backgroundColor: "var(--primary-color)" }}
                >
                    {loading ? "Updating..." : "Update Profile"}
                </button>
            </form>
        </div>
    );
}

// Reusable Input Component
function Input({ label, type = "text", value, icon, onChange }) {
    return (
        <div className="bg-white shadow rounded-xl px-5 py-2">
            <label className="text-sm font-medium">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-transparent outline-none text-[15px]"
                placeholder={`Enter ${label.toLowerCase()}`}
            />
        </div>
    );
}
