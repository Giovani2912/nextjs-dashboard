"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MenuLink = ({item}) => {

    const pathname = usePathname()

    return(
        <Link href={item.path} className={cn("p-4 my-1.5 flex items-center gap-2 cursor-pointer rounded-xl bg-none w-full border-none text-slate-100 hover:bg-slate-700/20", pathname === item.path && "bg-slate-700 hover:bg-slate-700")}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink