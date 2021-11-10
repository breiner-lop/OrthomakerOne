import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mx-24">{children}</main>
    </>
  )
}