import Image from "next/image"
export default function ButtonNextForm({onClick}) {
    return (
        <button onClick={onClick} className="w-12 h-12 flex items-center justify-center border border-red-dark rounded-full"><Image src="/img/row.png" width="19px" height="17px" /></button>
    )
}
