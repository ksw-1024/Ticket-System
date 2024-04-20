import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//インスタンスを作成
const prisma = new PrismaClient();

// データベースに接続する関数
export const connect = async () => {
    try {
        //prismaでデータベースに接続
        prisma.$connect();
    } catch (error) {
        return Error("DB connection failed.")
    }
}

// データベースからデータを取得する
export const GET = async (req: Request) => {
    try {
        await connect();
        const userdatas = await prisma.userData.findMany();
	
        return NextResponse.json({userdatas},{ status: 200 })

    } catch (error) {
        return NextResponse.json({ messeage: "Error" },{ status: 500 })

    } finally {
        //必ず実行する
        await prisma.$disconnect();
    }
}

export const POST = async (req: Request, res: NextResponse) => {
    const { name, mail, icon } = await req.json();
    try {
        await connect();
        const todo = await prisma.userData.create({
            data: {
                date: new Date(),
                name: name,
                mail: mail,
                icon: icon
            }
        });

        return NextResponse.json({ message: "Registration completed."}, { status: 200 })

    } catch (error) {
        return NextResponse.json({ messeage: "Registration failed." }, { status: 500 })

    } finally {
        await prisma.$disconnect();
    }
}