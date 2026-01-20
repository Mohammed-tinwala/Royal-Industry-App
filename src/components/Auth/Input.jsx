import { useState } from "react";

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon, // "mail", "lock", "person"
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full">

      {/* Input container */}
      <div
        className="
          w-full 
          bg-white 
          rounded-xl 
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          px-5 py-2
          flex items-center justify-between gap-3 mb-3
        "
      >
        <div className="flex items-center gap-3">
          {/* Left Icon */}
          {icon && (
            <span className="material-symbols-rounded text-gray-700">
              {icon}
            </span>
          )}

          {/* Label */}
          <div>
            {label && (
              <label className="block text-[14px] font-medium text-gray-800">
                {label}
              </label>
            )}

            {/* Input */}
            <input
              type={isPassword ? (showPassword ? "text" : "password") : type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="
            w-full 
            bg-transparent 
            text-[15px] 
            placeholder-gray-500
            focus:outline-none
          "
            />
          </div>
        </div>

        {/* Show / Hide Password Icon */}
        {isPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="
              material-symbols-rounded 
              text-[22px] text-gray-600 
              cursor-pointer select-none
            "
          >
            {showPassword ? "visibility" : "visibility_off"}
          </span>
        )}
      </div>
    </div>
  );
}
