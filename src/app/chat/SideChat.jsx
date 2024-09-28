import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

export default function SideChat() {
    return (
        <div>
            <aside id="logo-sidebar" className="fixed top-10 left-16 z-40 w-56 h-screen pt-20 transition-transform -translate-x-full  sm:translate-x-0 bg-slate-50">

                <div className="h-full px-3 pb-4 overflow-y-auto pl-6 space-y-3">

                    <div className="flex items-center justify-between">
                        <h1 className="font-black">Message</h1>
                        {/* <p className="font-bold text-sm -mb-1.5 text-blue-400">48 New</p> */}
                        <label><FaRegEdit className="text-xl text-blue-400 ml-5" /></label>
                    </div>

                    {/* chat list here */}
                    <ul>

                        <Link href={'/chat/user1'} className="flex items-center gap-3 pt-2">

                            <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div className="text-sm">
                                <h3>Aman</h3>
                                <h3>Hello this is aman</h3>
                            </div>

                        </Link>

                    </ul>

                </div>

            </aside>
        </div>
    )
}
