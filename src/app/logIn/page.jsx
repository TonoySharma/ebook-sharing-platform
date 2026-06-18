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
import { authClient, signIn, signUp } from "../../lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";


const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        // console.log(userData);

        const { data, error } = await signIn.email({
            email: userData.email,
            password: userData.password,
            remember: true,
            callbackURL: "/",
        })
        // console.log(data, error , "login register")

        if (error) {
            alert(error.message)
        }
        if (data) {
            alert("Login successful");
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <FadeUp>
        <div className="flex my-15  justify-center px-4">

            <div className="w-full  backdrop-blur-xl bg-white/70 border
             border-gray-200 shadow rounded-2xl p-8 max-w-[450px] bg-gradient-to-br
              from-indigo-50 via-white to-emerald-50 ">

                <div className=" mb-6">
                    <h1 className="text-2xl font-bold text-center mb-2">
                        Login your account
                    </h1>
                    <p className="text-center text-gray-500">Welcome back! Please enter your details.</p>
                </div>

                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>


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
                        }}>
                        <Label>Email</Label>
                        <Input
                            placeholder="Enter your email"
                            className="rounded border border-gray-300"
                        />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField className="w-full" name="password"
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
                        <InputGroup className='rounded overflow-hidden border border-gray-300'>
                            <InputGroup.Input
                                className="w-full max-w-[350px]"
                                type={isVisible ? "text" : "password"}
                                name="password"
                                placeholder="Your Password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}>
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

                        <Button
                            type="submit"
                            className="w-full rounded bg-gray-50 text-black
                             hover:bg-gray-700 hover:text-white border border-gray-300
                              transition-all duration-200">
                            <CiLogin />
                            Login
                        </Button>
                    </div>
                    <hr />
                    <Button onClick={handleGoogleLogin} className="w-full rounded  bg-gray-50 text-black
                             hover:bg-gray-700 hover:text-white border border-gray-300
                              transition-all duration-200" variant="">
                        <FcGoogle />
                        Sign in with Google
                    </Button>
                </Form>

                <p className="text-xs text-gray-500 text-center mt-6">
                    Dont have an account? {" "}
                    <Link href="/signUp">
                        <span className="text-indigo-600 cursor-pointer hover:underline">
                            Sign Up
                        </span>
                    </Link>
                </p>


            </div>
        </div>
        </FadeUp>
    );
};

export default LoginPage;