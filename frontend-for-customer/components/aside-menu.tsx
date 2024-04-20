"use client"

import { Button } from "@/components/ui/button"
import { Ticket, Home, QrCode, LifeBuoy } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"
import Link from "next/link"
import { usePathname } from "next/navigation"

import React from "react"
import { useSession } from "next-auth/react"

import Image from "next/image"
import UserIcon from "@/public/user-icon.svg"

export function AsideMenu() {
    const pathname = usePathname();
    const { data: session, status } = useSession()
    var LoginText = "Login"
    if (status === "authenticated") LoginText = "Account"

    return (
        <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
            <div className="border-b p-2">
                <Button variant="outline" size="icon" aria-label="Logo" asChild>
                    <Link href={"/"}>
                        <Ticket className="size-5" />
                    </Link>
                </Button>
            </div>
            <nav className="grid gap-1 p-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={
                                    pathname === "/"
                                        ? "rounded-lg bg-muted"
                                        : "rounded-lg"
                                }
                                aria-label="Home"
                                asChild
                            >
                                <Link href="/">
                                    <Home className="size-5" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Home
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={
                                    pathname === "/scan-ticket"
                                        ? "rounded-lg bg-muted"
                                        : "rounded-lg"
                                }
                                aria-label="Scan Ticket"
                                asChild
                            >
                                <Link href="/scan-ticket">
                                    <QrCode className="size-5" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Scan Ticket
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="mt-auto grid gap-1 p-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={
                                    pathname === "/about"
                                        ? "rounded-lg bg-muted"
                                        : "rounded-lg"
                                }
                                aria-label="About"
                            >
                                <Link href={"/about"}>
                                    <LifeBuoy className="size-5" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            About
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={
                                    pathname === "/login" || pathname === "/account"
                                        ? "mt-auto rounded-lg bg-muted"
                                        : "mt-auto rounded-lg"
                                }
                                aria-label={
                                    status === "authenticated"
                                        ? "Account"
                                        : "Login"
                                }
                            >
                                <Link href={
                                    status === "authenticated"
                                        ? "/account"
                                        : "/login"
                                }>
                                    <Image src={UserIcon} alt="" className="size-5" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            {LoginText}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}