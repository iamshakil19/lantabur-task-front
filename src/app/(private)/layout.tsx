import ProtectedRoute from "@/utils/ProtectedRoute";
import React from "react";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedRoute>
      Private Layout
      {children}
    </ProtectedRoute>
  );
};

export default PrivateLayout;
