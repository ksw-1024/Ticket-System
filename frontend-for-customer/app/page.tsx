"use client"

import { AsideMenu } from "@/components/aside-menu";
import Image from "next/image";

import Reservations from "@/public/reservations_illust.svg"
import Walking from "@/public/walking_illust.svg"
import Ticket from "@/public/ticket_illust.svg"

import Command from "@/public/command_illust.svg"
import Internet from "@/public/internet_illust.svg"

import * as React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Footer } from "@/components/footer";

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
        <p className={"text-sm font-semibold px-4 mt-2"}>このシステムは、オープンソースで開発されたオンラインチケットシステムです。</p>
        <p className={"text-sm font-semibold px-4"}>主に、学校の文化祭、学園祭、またはフリーマーケットなど、入場管理を低コストで行いたい場合に適しています。</p>
        <div className="grid grid-cols-3 lg:grid-cols-11 items-end">
          <Card className={"col-span-3 lg:col-start-2 mt-5 h-[300px] mr-5 ml-5"}>
            <CardHeader>
              <CardTitle className={"text-center font-medium text-sm"}>
                予約して
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={Reservations} alt="Reservation illust" className="mr-auto ml-auto" height={200}></Image>
            </CardContent>
          </Card>
          <Card className={"col-span-3 lg:col-start-5 mt-5 h-[300px] mr-5 ml-5"}>
            <CardHeader>
              <CardTitle className={"text-center font-medium text-sm"}>
                会場に向かって
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={Walking} alt="Going illust" className={"mr-auto ml-auto"} height={200} />
            </CardContent>
          </Card>
          <Card className={"col-span-3 lg:col-start-8 mt-5 h-[300px] mr-5 ml-5"}>
            <CardHeader>
              <CardTitle className={"text-center font-medium text-sm"}>
                QRコードを読み取るだけ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={Ticket} alt="Ticket illust" className={"mr-auto ml-auto"} height={200} />
            </CardContent>
          </Card>
        </div>
        <div className="sticky top-0 z-10 flex h-[57px] border-b border-t mt-5 items-center md:gap-1 px-4 bg-background">
          <h2 className="text-xl font-bold">あなたのイベントに簡単に導入</h2>
        </div>
        <p className={"text-sm font-semibold px-4 mt-2"}>いくつかのコマンドをコピー&ペーストすれば、簡単にこのシステムを使うことができます。</p>
        <p className={"text-sm font-semibold px-4"}>OSSなので、自由に調整を加えることも可能です。</p>
        <div className="grid grid-cols-3 lg:grid-cols-8 items-end">
          <Card className={"col-span-3 lg:col-start-2 mt-5 h-[300px] mr-5 ml-5"}>
            <CardHeader>
              <CardTitle className={"text-center font-medium text-sm"}>
                マニュアル通りにコマンドを入力すれば
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={Command} alt="Command illust" className={"mr-auto ml-auto"} height={200} />
            </CardContent>
          </Card>
          <Card className={"col-span-3 lg:col-start-5 mt-5 h-[300px] mr-5 ml-5"}>
            <CardHeader>
              <CardTitle className={"text-center font-medium text-sm"}>
                すぐにサービス利用開始
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={Internet} alt="Internet illust" className={"mr-auto ml-auto"} height={200} />
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}