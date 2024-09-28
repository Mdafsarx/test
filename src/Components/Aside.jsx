"use client"

import { IoCall, IoChatboxEllipsesSharp, IoHomeOutline, IoSettingsOutline, IoVolumeHighOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Aside() {
      
    const router = usePathname()
    console.log(router)





    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-16 h-screen pt-14 transition-transform -translate-x-full border-r sm:translate-x-0 ">

            <div className="h-full pl-5 pb-4 overflow-y-auto  text-black flex flex-col gap-y-3 relative">
                <Link href={'/'} className={router==='/'?'text-blue-400 border-r-2 border-blue-400':''}><IoHomeOutline className="text-2xl font-bold" /></Link>
                <Link href={'/chat'} className={router.includes('/chat')?'text-blue-400 border-r-2 border-blue-400':''}><IoChatboxEllipsesSharp className="text-2xl font-bold" /></Link>
                <Link href={'/marked'} className={router==='/marked'?'text-blue-400 border-r-2 border-blue-400':''}><CiBookmark className="text-2xl font-bold" /></Link>
                <Link href={'/volume'} className={router==='/volume'?'text-blue-400 border-r-2 border-blue-400':''}><IoVolumeHighOutline className="text-2xl font-bold" /></Link>
                <Link href={'/member'} className={router==='/member'?'text-blue-400 border-r-2 border-blue-400':''}><AiOutlineTeam className="text-2xl font-bold" /></Link>
                <Link href={'/call'} className={router==='/call'?'text-blue-400 border-r-2 border-blue-400':''}><IoCall className="text-2xl font-bold" /></Link>
                <div className="absolute bottom-4 ">
                    <label><RiLogoutCircleRLine className="text-2xl font-bold" /></label>
                    <label><IoSettingsOutline className="text-2xl font-bold mt-3" /></label>
                </div>
            </div>

        </aside>
    )
}
