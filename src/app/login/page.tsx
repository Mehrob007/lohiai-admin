"use client";
import React from "react";
import Input from "@/components/element-tags/Input";
import { useFormStore } from "../../hooks/useFormStore";
import apiClient from "../../utils/apiClient.js";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { data, errors, setData, validate } = useFormStore();

  const onSend = async () => {
    const isValid = validate({
      email: { required: true },
      password: { required: true, minLength: 4 },
    });
    if (isValid) {
      try {
        const res = await apiClient.post("/auth/login", data);
        console.log("res login:", res.data);
        const { token } = res.data;
        localStorage.setItem("token", token);
        router.replace("/");
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <div className="login">
      <div className="login-content">
        <h1>Login</h1>
        <div>
          <Input
            title="E-mail"
            required={true}
            id="login-input-email"
            value={(data?.email as string) || ""}
            error={errors}
            onChange={(e) => setData("email", e)}
            placeholder="email"
          />
          <Input
            title="Password"
            required={true}
            id="login-input-password"
            value={(data?.password as string) || ""}
            error={errors}
            onChange={(e) => setData("password", e)}
            placeholder="password"
          />
        </div>
        <button onClick={onSend}>Вход</button>
      </div>
    </div>
  );
}
