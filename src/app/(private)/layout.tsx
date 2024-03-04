import ProtectedRoute from "@/utils/ProtectedRoute";
import React from "react";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
};

export default PrivateLayout;
