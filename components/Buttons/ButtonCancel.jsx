import Link from "next/link"
export default function ButtonCancel({text}) {
    return (
       <Link href="/">
        <span className="font-semibold text-white w-48 h-11 rounded-3xl bg-red-dark hover:text-red-dark hover:bg-red-light transition duration-300 flex justify-center items-center cursor-pointer">{text}</span>
       </Link>
    )
}