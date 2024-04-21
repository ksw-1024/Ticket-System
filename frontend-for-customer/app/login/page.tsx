import { AsideMenu } from "@/components/aside-menu";

import Image from "next/image"
import GoogleIcon from "@/public/google-icon.svg"

import { signIn } from "@/auth"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
    return (
        <div className="grid h-screen w-full pl-[56px]">
            <AsideMenu />
            <div className={"flex flex-col mr-10 ml-10"}>
                <header className={"sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4"}>
                    <h1 className={"text-xl font-bold"}>I am T-SYS !</h1>
                </header>
                <Card className="w-full max-w-xs mt-[60px] ml-auto mr-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription className="mt-1">
                            アカウントにログインしてください。
                        </CardDescription>
                    </CardHeader>
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                    >
                        <CardFooter>
                            <Button variant={"outline"} className="w-full">
                                <Image src={GoogleIcon} alt="Google Icon" className="mr-3 h-5 w-5"></Image> Signin with Google</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
}
