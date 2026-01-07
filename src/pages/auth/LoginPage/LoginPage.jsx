import { useState } from "react";
import Button from "../../../components/ButtonComponent/ButtonComponent";
import InputField from "../../../components/InputFieldComponent/InputFieldComponent";
import SocialLogin from "../../../components/SocialLoginComponent/SocialLoginComponent";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: gọi API login
    console.log("Login data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div
        className="
          w-full max-w-md
          bg-gray-800
          rounded-2xl
          shadow-lg
          p-6
          max-h-[90vh]
          overflow-y-auto
        "
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Đăng nhập tài khoản
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Tên đăng nhập"
            placeholder="Nhập tên đăng nhập"
            value={form.username}
            onChange={(e) =>
              handleChange({
                ...e,
                target: { ...e.target, name: "username" },
              })
            }
          />

          <InputField
            label="Mật khẩu"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) =>
              handleChange({
                ...e,
                target: { ...e.target, name: "password" },
              })
            }
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Đăng nhập
          </Button>
        </form>

        <SocialLogin
          onGoogle={() => console.log("Google Login")}
          onFacebook={() => console.log("Facebook Login")}
        />

        <p className="mt-4 text-center text-sm text-gray-400">
          Chưa có tài khoản?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
}
