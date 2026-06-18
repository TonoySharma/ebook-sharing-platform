"use client";

import { Checkbox, Form, InputGroup } from "@heroui/react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient, signUp } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import FadeUp from "@/components/FadeUp";


 
const RegisterPage = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    // console.log(userData);

    const { data, error } = await signUp.email({
      name: userData.name, // required
      email: userData.email, // required
      image: userData.image,
      password: userData.password, // required

    })
    // console.log(data, error , "signup register")
    if (!error) {
      router.push('/')
    }

    if (error) {
      alert(error.message)
    }
    if (data) {
      alert("signup successful");
    }
  };
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
      <FadeUp>
    <div className="my-15 flex justify-center px-4">

      <div className="w-full  backdrop-blur-xl bg-white/70 border
       border-gray-200 shadow rounded-2xl p-8 max-w-[450px] bg-gradient-to-br
           from-indigo-50 via-white to-emerald-50">

        <h1 className="text-2xl font-bold text-center mb-5">
          Register your account
        </h1>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          {/* name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}>
            <Label>Name</Label>
            <Input className="rounded border border-gray-300" placeholder="Enter Your Name " />
            <FieldError />
          </TextField>

          {/* photo */}
          <TextField
            isRequired
            name="image"
            validate={(value) => {
              if (value.length < 3) {
                return "Please enter your photo url";
              }
              return null;
            }}>
            <Label>Photo URL</Label>
            <Input className="rounded border border-gray-300" placeholder="Enter url" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }} >
            <Label>Email</Label>
            <Input
              placeholder="Enter your email"
              className="rounded border border-gray-300"
            />
            <FieldError />
          </TextField>

          {/* Password */}

          <TextField className="w-full"   name="password"
          isRequired
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}>
            <Label>Password</Label>
            <InputGroup className='rounded border border-gray-300 overflow-hidden '>
              <InputGroup.Input
                className="w-full max-w-[350px]"
                type={isVisible ? "text" : "password"}
                name="password"
                placeholder="Your Password" />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)} >
                  {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
             <FieldError />
          </TextField>
          <Checkbox value="writing">
            <Checkbox.Control className="bg-purple-300 rounded-full">
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label>Accept Term & Conditions</Label>
            </Checkbox.Content>
          </Checkbox>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-2">

            <Link href={"/login"}>
              <Button
                type="submit"
                className="w-full rounded  bg-gray-100 text-black
                             hover:bg-gray-700 hover:text-white border border-gray-300
                    transition-all duration-200">
                <Check />
                Register
              </Button>
            </Link>
            <hr></hr>
            <Button onClick={handleGoogleLogin} className="w-full rounded  bg-gray-50 text-black
                 hover:bg-gray-700 hover:text-white border border-gray-300
                   transition-all duration-200" variant="">
              <FcGoogle />
              Sign in with Google
            </Button>
          </div>
        </Form>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-indigo-600 cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </p>

      </div>
    </div>
    </FadeUp>
  );
};

export default RegisterPage;