import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="m-auto overflow-x-hidden" style={{maxWidth:"1500px"}}>
      <Navbar/>
      <main className="mx-24">{children}</main>
      <Footer/>
    </div>
  )
}