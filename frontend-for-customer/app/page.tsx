"use client"

import { AsideMenu } from "@/components/aside-menu";
import Image from "next/image";
import Reservations from "@/public/reservations_illust.svg"
import Walking from "@/public/walking_illust.svg"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <AsideMenu />
      <div className={"flex flex-col mr-10 ml-10"}>
        <header className={"sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4"}>
          <h1 className={"text-xl font-bold"}>I am T-SYS !</h1>
        </header>
        <h1 className={"mt-6 font-extrabold text-4xl px-4"}>Hello, World!</h1>
        <h2 className={"px-4 font-semibold md:mt-3 mt-1"}>T-SYSへようこそ。</h2>
        <h2 className={"px-4 font-semibold hidden md:inline-block"}>T-SYSはOSSで開発されているオンラインチケット管理システムです。</h2>
        <div className="sticky top-0 z-10 flex h-[57px] border-b border-t mt-5 items-center md:gap-1 px-4 bg-background">
          <h2 className="text-xl font-bold">このシステムについて</h2>
        </div>
        <p className={"text-sm font-semibold px-4 mt-1"}>このシステムは、オープンソースで開発されたオンラインチケットシステムです。</p>
        <p className={"text-sm font-semibold px-4"}>主に、学校の文化祭、学園祭、またはフリーマーケットなど、入場管理を低コストで行いたい場合に適しています。</p>
        <div className="grid grid-cols-3 lg:grid-cols-11 items-end">
          <Card className={"col-span-3 lg:col-start-2 mt-5 h-[300px] mr-5 ml-5"}>
            {/* <Image src={Reservations} alt="Reservation illust" className="px-8 mt-5 mr-auto ml-auto"></Image> */}
            {/* <p className={"text-center mt-3 font-medium text-sm mb-5"}>予約して</p> */}
            <CardHeader>
              <CardTitle className={"text-center font-medium text-sm"}>
                予約して
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className={"col-span-3 lg:col-start-5 mt-5 h-[300px] mr-5 ml-5"}>
            <div className={"items-end"}>
              {/* <Image src={Walking} alt="Going illust" className={"px-8 mt-5 mr-auto ml-auto"} /> */}
              <p className="text-center mt-3 font-medium text-sm mb-5">会場に向かって</p>
            </div>
          </Card>
          <Card className={"col-span-3 lg:col-start-8 mt-5 h-[300px] mr-5 ml-5"}>
            <div className={"items-end"}>
              {/* <Image src={Walking} alt="Going illust" className={"px-8 mt-5 mr-auto ml-auto"} /> */}
              <p className="text-center mt-3 font-medium text-sm mb-5">QRコードを読み取るだけ</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}