"use client";

import { Checkbox, Form, InputGroup } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      remember: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message)
    }
    if (data) {
      toast.success("Login successful");
    }
  };
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <FadeUp>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-50 via-white to-emerald-50">

        {/* MAIN CARD */}
        <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden grid lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-12">

            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200"
              alt="Books"
              className="w-[380px] rounded-2xl shadow-2xl mb-8"
            />

            <h1 className="text-4xl font-bold text-center">
              Welcome Back Reader 📚
            </h1>

            <p className="text-center text-indigo-100 mt-4 max-w-md">
              Continue your journey through thousands of ebooks, stories, and
              knowledge shared by readers worldwide.
            </p>

            <div className="mt-8 space-y-3 text-sm text-indigo-100">
              <p>✔ Access your saved books anytime</p>
              <p>✔ Explore trending ebooks</p>
              <p>✔ Join a global reading community</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center p-10">

            <div className="w-full max-w-md">

              {/* HEADER */}
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold">Login Account</h1>
                <p className="text-gray-500 mt-2">
                  Enter your credentials to continue
                </p>
              </div>

              {/* FORM */}
              <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

                {/* EMAIL */}
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label>Email</Label>
                  <Input placeholder="Enter your email" />
                  <FieldError />
                </TextField>

                {/* PASSWORD */}
                <TextField
                  isRequired
                  name="password"
                  validate={(value) => {
                    if (value.length < 8) return "Min 8 characters required";
                    if (!/[A-Z]/.test(value)) return "Add uppercase letter";
                    if (!/[0-9]/.test(value)) return "Add number";
                    return null;
                  }}
                >
                  <Label>Password</Label>

                  <InputGroup className="border rounded-lg overflow-hidden">
                    <InputGroup.Input
                      type={isVisible ? "text" : "password"}
                      placeholder="Your password"
                    />

                    <InputGroup.Suffix>
                      <Button
                        isIconOnly
                        variant="ghost"
                        onPress={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? (
                          <Eye className="size-4" />
                        ) : (
                          <EyeSlash className="size-4" />
                        )}
                      </Button>
                    </InputGroup.Suffix>
                  </InputGroup>

                  <FieldError />
                </TextField>

                {/* CHECKBOX */}
                <Checkbox>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content>
                    <Label>Remember me</Label>
                  </Checkbox.Content>
                </Checkbox>

                {/* LOGIN BUTTON */}
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 rounded hover:bg-indigo-700 text-white py-6"
                >
                  <CiLogin />
                  Login
                </Button>

                {/* DIVIDER */}
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-gray-300" />
                  <span className="text-sm text-gray-400">OR</span>
                  <div className="h-[1px] flex-1 bg-gray-300" />
                </div>

                {/* GOOGLE */}
                <Button
                  onClick={handleGoogleLogin}
                  className="w-full border p-6 rounded"
                >
                  <FcGoogle size={30} />
                  Continue with Google
                </Button>
              </Form>

              {/* SIGNUP */}
              <p className="text-center text-sm text-gray-500 mt-6">
                Don’t have an account?{" "}
                <Link href="/signUp" className="text-indigo-600 hover:underline font-semibold">
                  Sign up
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
};

export default LoginPage;