"use client";

import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const DashboardPage = () => {
  const token = useAppSelector(useCurrentToken);

  return <div>This is dashboard page</div>;
};

export default DashboardPage;
