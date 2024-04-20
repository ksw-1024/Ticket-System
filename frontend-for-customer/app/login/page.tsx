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
        <>
            <main className="flex min-h-screen flex-col items-center justify-between">
                <AsideMenu />
                <Card className="w-full max-w-xs mt-auto mb-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription className="mt-1">
                            アカウントにログインしてください。
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                    </CardContent>
                    <CardContent>
                        <Button className="w-full">Sign in</Button>
                    </CardContent>
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
            </main>
        </>
    );
}
