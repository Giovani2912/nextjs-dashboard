"use client"
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname()
    return(
        <div className="flex bg-slate-800 p-5 rounded-lg justify-between">
            <div className="capitalize text-2xl">{pathname.split("/").pop()}</div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-lg">
                    <MdSearch />
                    <input type="text" placeholder="Buscar..." className="bg-transparent outline-none"/>
                </div>
                <div className="flex gap-4">
                    <MdOutlineChat size={20} className="cursor-pointer"/>
                    <MdNotifications size={20} className="cursor-pointer"/>
                    <MdPublic size={20} className="cursor-pointer"/>
                </div>

            </div>
        </div>
    )
}

export default Navbar