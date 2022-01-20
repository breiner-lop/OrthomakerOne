import Link from "next/link";
export default function Footer() {
  return (
    <footer className="text-purple-dark px-5 lg:px-10 xl:px-20 py-6 max-w-[1500px] mx-auto">
      <div className="border-t-2 border-b-2 border-0 border-solid border-blue-light py-10">
      <Link href="/">
        <span className="text-2xl cursor-pointer">
            Ortho<strong>Maker</strong>
        </span>
        </Link>

        <div className="md:flex block mt-10">
          <div className="flex flex-col h-20 mr-0 md:mr-20">
            <span className="text-blue-transparent text-xl font-light">
              Mail contacto
            </span>
            <span className="text-3xl">info@orthomakerone.com</span>
          </div>
          <div className="flex flex-col h-20 mr-0 md:mr-20">
            <span className="text-blue-transparent text-xl font-light">
              Tel
            </span>
            <span className="text-3xl">+57 316 8203029</span>
          </div>
          <div className="flex flex-col h-20 mr-0 md:mr-20">
            <span className="text-blue-transparent text-xl font-light">
              Dir
            </span>
            <span className="text-3xl">Barranquilla, colombia</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:text-base text-sm py-4">
        <ul className="flex">
          <li className="mr-4">
            <Link href="/">Facebook</Link>
          </li>
          <li className="mr-4">
            <Link href="/">Instagram</Link>
          </li>
          <li className="mr-4">
            <Link href="/">Twitter</Link>
          </li>
        </ul>
        <span>Copyright 2021</span>
      </div>
    </footer>
  );
}
