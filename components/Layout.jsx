import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="m-auto" style={{maxWidth:"1500px"}}>
      <Navbar />
      <main className="mx-24">{children}</main>
    </div>
  )
}