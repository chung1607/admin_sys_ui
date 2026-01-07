import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputField({ label, type = "text", value, onChange, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-md border border-gray-600 bg-gray-800 text-white px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}