import Image from "next/image"
export default function Navbar(){
    return(
        <>
        <nav className="mx-auto flex w-full max-w-[1440px] justify-between px-4 py-5 text-sm bg-black">
            <div className="flex items-center gap-8">
                <img src="/rpsu-logo.png" alt="logo" className="w-[490px] h-[59px] md:w-[300]" />
            </div>
        </nav>
        </>
    )
}