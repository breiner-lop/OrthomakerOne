import Link from "next/link";
import GetStarted from "./Buttons/GetStarted";
export default function Navbar() {
  return (
    <nav className="flex justify-between h-32 items-center text-purple-dark bg-blue-light px-24">
      <Link href="/">
        <a className="text-purple-dark text-lg">Ortho<strong>Maker</strong></a>
      </Link>
      <ul className="flex">
        <li className="mx-4">
          <Link href="/">About Us</Link>
        </li>
        <li className="mx-4">
          <Link href="/">Products</Link>
        </li>
        <li className="mx-4">
          <Link href="/">Reviews</Link>
        </li>
        <li className="mx-4">
          <Link href="/">Contact</Link>
        </li>
      </ul>
      <GetStarted />
    </nav>
  );
}
