"use client"

import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: any }) => {
    const token = useAppSelector(useCurrentToken);
    const router = useRouter();
    if (!token) {
        return router.push('/login')
    }
    return children;
};

export default ProtectedRoute;