import PublicRoute from "@/utils/PublicRoute";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PublicRoute>
      {children}
    </PublicRoute>
  );
};

export default PublicLayout;
