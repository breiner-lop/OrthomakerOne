import Link from "next/link";
export default function Footer() {
  return (
    <footer className="text-purple-dark mx-24 py-6">
      <div className="border-t-2 border-b-2 border-blue-light py-10">
      <Link href="/">
        <span className="text-2xl cursor-pointer">
            Ortho<strong>Maker</strong>
        </span>
        </Link>

        <div className="flex mt-10">
          <div className="flex flex-col h-20 mr-20">
            <span className="text-blue-transparent text-2xl font-light">
              Mail contacto
            </span>
            <span className="text-4xl">mail.gmail.com</span>
          </div>
          <div className="flex flex-col h-20 mr-20">
            <span className="text-blue-transparent text-2xl font-light">
              Tel
            </span>
            <span className="text-4xl">+57 319 220 0983</span>
          </div>
          <div className="flex flex-col h-20 mr-20">
            <span className="text-blue-transparent text-2xl font-light">
              Dir
            </span>
            <span className="text-4xl">Bogota, colombia</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4">
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