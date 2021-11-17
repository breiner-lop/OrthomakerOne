import Link from "next/link";
import GetStarted from "./Buttons/GetStarted";
export default function Navbar() {
  return (
    <nav className="flex justify-between h-20 items-end pb-2 text-purple-dark bg-blue-light px-24">
      <Link href="/">
        <a className="text-purple-dark text-2xl">Ortho<strong>Maker</strong></a>
      </Link>
      <ul className="flex text-lg">
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
