import { useState } from "react";
import Button from "../../../components/ButtonComponent/ButtonComponent";
import InputField from "../../../components/InputFieldComponent/InputFieldComponent";
import SocialLogin from "../../../components/SocialLoginComponent/SocialLoginComponent";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }

    // TODO: gọi API register
    console.log("Register data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Đăng ký tài khoản
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <InputField
            label="Họ và tên"
            placeholder="Nhập họ và tên"
            value={form.fullName}
            onChange={(e) => handleChange({ ...e, target: { ...e.target, name: "fullName" } })}
          />

          <InputField
            label="Tên đăng nhập"
            placeholder="Nhập tên đăng nhập"
            value={form.username}
            onChange={(e) => handleChange({ ...e, target: { ...e.target, name: "username" } })}
          />

          <InputField
            label="Số điện thoại"
            placeholder="Nhập số điện thoại"
            value={form.phone}
            onChange={(e) => handleChange({ ...e, target: { ...e.target, name: "phone" } })}
          />

          <InputField
            label="Email"
            type="email"
            placeholder="Nhập email"
            value={form.email}
            onChange={(e) => handleChange({ ...e, target: { ...e.target, name: "email" } })}
          />

          <InputField
            label="Mật khẩu"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => handleChange({ ...e, target: { ...e.target, name: "password" } })}
          />

          {/* <InputField
            label="Xác nhận mật khẩu"
            type="password"
            placeholder="••••••••"
            value={form.confirmPassword}
            onChange={(e) =>
              handleChange({ ...e, target: { ...e.target, name: "confirmPassword" } })
            }
          /> */}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Đăng ký
          </Button>
        </form>

        <SocialLogin
          onGoogle={() => console.log("Google Register")}
          onFacebook={() => console.log("Facebook Register")}
        />

        <p className="mt-4 text-center text-sm text-gray-400">
          Đã có tài khoản?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
}
