import { Header, Table, UserSearch, UserFilter } from "@/components"



export default function Home() {
  
  return (
    <main className="w-full bg-bg font-inter flex flex-col justify-start items-start min-h-screen text-gray-700 lg:py-[-15px] lg:px-[102px] lg:gap-[112px] md:gap-[85px] gap-8 py-10 px-5">
      <Header />
      <div className="w-full flex items-start justify-between">
      <UserSearch />
      <UserFilter />
      </div>
      <Table />
    </main>
  )
}
