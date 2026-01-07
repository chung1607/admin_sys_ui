import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SocialLogin({ onGoogle, onFacebook }) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-center">
        <span className="h-px w-16 bg-gray-600"></span>
        <span className="px-3 text-gray-400 text-sm">hoặc đăng nhập với</span>
        <span className="h-px w-16 bg-gray-600"></span>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          onClick={onGoogle}
          className="flex w-1/2 items-center justify-center gap-2 rounded-xl border border-gray-700 py-3 text-white hover:bg-white/10 transition"
        >
          <FcGoogle size={20} /> Google
        </button>
        <button
          onClick={onFacebook}
          className="flex w-1/2 items-center justify-center gap-2 rounded-xl border border-gray-700 py-3 text-white bg-blue-600 hover:bg-blue-700 transition"
        >
          <FaFacebook size={20} className="text-white" /> Facebook
        </button>
      </div>
    </div>
  );
}