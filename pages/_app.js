import 'tailwindcss/tailwind.css'
import {CasosProvider} from "../contexts/casosExito/navInicio.context"


function MyApp({ Component, pageProps }) {
  return <CasosProvider><Component {...pageProps} /></CasosProvider>
}

export default MyApp
