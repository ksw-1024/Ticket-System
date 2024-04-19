import { AsideMenu } from "@/components/aside-menu";

export default function Home() {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <AsideMenu />
      <div className={"flex flex-col"}>
        <header className={"sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4"}>
          <h1 className={"text-xl font-bold"}>I am T-SYS !</h1>
        </header>
        <h1 className={"mt-6 font-extrabold text-4xl px-4"}>Hello, World!</h1>
        <h2 className={"px-4 font-semibold mt-3"}>T-SYSへようこそ。</h2>
        <h2 className={"px-4 font-semibold"}>T-SYSはOSSで開発されているオンラインチケット管理システムです。</h2>
      </div>
    </div>
  );
}