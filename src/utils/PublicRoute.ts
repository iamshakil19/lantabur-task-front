"use client"

import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const PublicRoute = ({ children }: { children: any }) => {
    const token = useAppSelector(useCurrentToken);
    const router = useRouter();
    if (token) {
        return router.push('/dashboard')
    }
    return children;
};

export default PublicRoute;