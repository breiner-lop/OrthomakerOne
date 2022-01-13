import Link from "next/link"
export default function ButtonCancelBlueLight() {
    return (
       <Link href="/">
        <span className="font-semibold text-blue-semigray w-48 filter drop-shadow h-11 rounded-lg ml-2 bg-blue-mini-light hover:bg-blu-light  transition duration-200 flex justify-center items-center cursor-pointer"> <img src="/img/cancel.png" alt="cancel icon" className="mr-2" /> Cancelar</span>
       </Link>
    )
}