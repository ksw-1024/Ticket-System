"use client"

import { AsideMenu } from "@/components/aside-menu";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Scan() {
    const { data: session, status } = useSession()
    const router = useRouter()
    if (status === "authenticated") {
        return (
            <div className="grid h-screen w-full pl-[56px]">
                <AsideMenu />
                <div className={"flex flex-col mr-10 ml-10"}>
                    <header className={"sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4"}>
                        <h1 className={"text-xl font-bold"}>I am T-SYS !</h1>
                    </header>
                    <h1 className={"mt-6 font-extrabold text-4xl px-4"}>Your Tickets</h1>
                    <h2 className={"px-4 font-semibold mt-3"}>お持ちのチケットはこちらです。</h2>
                </div>
            </div>
        );
    } else {
        router.push("/login")
    }
}