"use client"

import { ReactDOM } from "react"

import { Button } from "@/components/ui/button"
import { Ticket, Home, ScanLine, LifeBuoy, SquareUser } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AsideMenu() {
    const pathname = usePathname();

    const navigation = [
        { id: 1, icon: "Home", name: "Home", href: "/" },
        { id: 2, icon: "ScanLine", name: "Scan Ticket", href: "/scan-ticket" }
    ]

    return (
        <>
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
                        {navigation.map(({ href, name, icon, id }) => (
                            <Tooltip key={id}>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={"rounded-lg"
                                        }
                                        aria-label={name}
                                        asChild
                                    >
                                        <Link href={href}>
                                            <Home className="size-5" />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    Home
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </TooltipProvider>
                </nav>
                <nav className="mt-auto grid gap-1 p-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mt-auto rounded-lg"
                                    aria-label="Help"
                                >
                                    <LifeBuoy className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Help
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mt-auto rounded-lg"
                                    aria-label="Account"
                                >
                                    <SquareUser className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Account
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
        </>
    )
}