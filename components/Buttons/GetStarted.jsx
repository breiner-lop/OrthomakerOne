import Link from "next/link"
export default function GetStarted() {
    return (
        <Link href="/getstarted"><span className="font-semibold text-white w-48 h-11 rounded-3xl bg-red-dark hover:text-red-dark hover:bg-red-light transition duration-300 flex justify-center items-center cursor-pointer">Get started</span></Link>
    )
}
