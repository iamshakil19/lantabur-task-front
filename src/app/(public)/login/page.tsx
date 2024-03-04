"use client";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [login, { isLoading, error, isError }] = useLoginMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await login(data).unwrap();
      const user = verifyToken((res as any).data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: (res as any).data.accessToken }));
      toast.success("Logged in", { id: "login", duration: 2000 });
      router.push("/dashboard");

      console.log(user);
    } catch (error) {}
  });

  return (
    <>
      <div className="md:flex h-screen">
        <div className="relative overflow-hidden h-screen lg:flex flex-1 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <Link href="/" className="text-white font-bold text-6xl font-sans">
              {" "}
              <span className="text-black">Lantabur</span> Softech
            </Link>
            <p className="text-white mt-1">
              Your dream, our work, let's build something together!
            </p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>

        <div className="flex flex-1 justify-center py-10 items-center bg-white">
          <section className="grid place-items-center w-full p-10 h-screen">
            {/* make register form */}
            <form
              action=""
              className="p-10 border shadow w-full max-w-lg bg-white relative"
              onSubmit={onSubmit}
            >
              <h1 className="text-3xl text-slate-700 font-extrabold mb-5 flex items-center gap-1">
                Login to your account
              </h1>

              <div className="flex flex-col gap-2 mt-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  id="email"
                  placeholder="Enter your email"
                  className="w-full focus:outline-none focus:ring-2 ring-1 ring-blue-500 rounded-md px-3 py-2.5"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {(errors as any).email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <label htmlFor="password">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must have at least 6 characters",
                      },
                    })}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full focus:outline-none focus:ring-2 ring-1 ring-blue-500 rounded-md px-3 py-2.5"
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {(errors as any).password.message}
                  </span>
                )}
              </div>

              {isError ? (
                <p className="mt-3 text-red-500 text-sm">
                  {(error as any)?.data?.message}
                </p>
              ) : null}

              {isLoading ? (
                <button
                  className="py-2.5 rounded-md font-semibold w-full text-white mt-6 bg-gradient-to-tr from-blue-500 to-purple-600"
                  disabled
                >
                  Loading...
                </button>
              ) : (
                <button className="py-2.5 rounded-md font-semibold w-full text-white mt-6 bg-gradient-to-tr from-blue-500 to-purple-600">
                  Login
                </button>
              )}

              <div className="mt-5">
                Don't have an account?{" "}
                <Link
                  href={"/register"}
                  className="text-purple-600 cursor-pointer"
                >
                  Create an account
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
