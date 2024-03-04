"use client";
import { LuLogOut } from "react-icons/lu";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

const DashboardPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-gradient-to-tr from-[#0052d4] via-[#4364f7] to-[#6fb1fc]  min-h-screen flex justify-center items-center h-fit">
      <div className="bg-white max-w-64 w-full py-3 px-7 rounded-md flex gap-5 items-center justify-between shadow-md">
        <div className="">
          <p className="font-medium">{user?.email}</p>
          <p className="text-sm">{user?.role}</p>
        </div>
        <div>
          <LuLogOut
            title="Logout button"
            onClick={() => dispatch(logout())}
            className="text-2xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
