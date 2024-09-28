"use client"
import { CgProfile } from "react-icons/cg";
import { TbMoodKid } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { usePathname } from "next/navigation";






export default function Cathar() {
    const route = usePathname()
    return (
       <div className="relative">
         <div className={`fixed top-[42px] left-[64px] z-50 w-full `}>
        
             <nav className={`flex items-center gap-x-14 w-full ${route.includes('/user1') && 'bg-slate-50'}  pb-4`}>
        
                 <div className="pl-6 py-1 flex items-center gap-3 ">
                     <CgProfile className="text-4xl border-2 border-blue-400 rounded-full" />
                     <TbMoodKid className="text-4xl border-2 border-blue-400 rounded-full" />
                     <FaVuejs className="text-4xl border-2 border-blue-400 rounded-full" />
                     <IoLogoNodejs className="text-4xl border-2 border-blue-400 rounded-full " />
                 </div>
        
                 {route.includes('/user1') &&
                     <div className="w-[78%]">
                         <div className="flex items-center justify-between w-full">
                             <div className="flex items-center gap-3 pt-2">
                         
                                 <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                     <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                 </div>
                                 <div className="text-sm">
                                     <h3>Aman</h3>
                                     <h3>Hello this is aman</h3>
                                 </div>
                         
                             </div>
                             <div className="flex items-center gap-2 *:text-xl">
                                 <p><MdOutlineCall /> </p>
                                 <p><CiSearch /> </p>
                                 <p><BsThreeDotsVertical /> </p>
                             </div>
                         </div>
                     </div>}
             </nav>

         </div>
       </div>
    )
}
