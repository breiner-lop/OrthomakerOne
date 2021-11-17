import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import {CasosProvider} from "../contexts/casosExito/navInicio.context"


function MyApp({ Component, pageProps }) {
  return <CasosProvider><Layout><Component {...pageProps} /></Layout></CasosProvider>
}

export default MyApp
