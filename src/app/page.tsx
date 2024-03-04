"use client";

import Link from "next/link";
import React from "react";
import Navbar from "./components/shared/Navbar";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";

const HomePage = () => {
  const token = useAppSelector(useCurrentToken);

  return (
    <div>
      <Navbar />
      <div className="hero bg-[#F2F7FF] h-[calc(100vh-84px)]">
        <div className="hero-content text-center flex justify-center items-center h-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold leading-normal">
              Hello, Welcome to
              <span className="text-blue-600"> Lantabur Softech</span>
            </h1>

            <div className="flex items-center gap-2 justify-center mt-10">
              {token && (
                <Link
                  href="/dashboard"
                  className="bg-blue-500 py-3 px-5 rounded-md text-white font-semibold duration-300 hover:bg-blue-600"
                >
                  Go to Dashboard
                </Link>
              )}
              {!token && (
                <>
                  <Link
                    href={"/register"}
                    className="bg-blue-500 py-3 px-5 rounded-md text-white font-semibold duration-300 hover:bg-blue-600"
                  >
                    Create Account
                  </Link>
                  <Link
                    href={"/login"}
                    className="bg-transparent py-3 px-5 rounded-md text-slate-700 font-semibold duration-300 hover:bg-slate-300"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
