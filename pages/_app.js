import 'tailwindcss/tailwind.css'
import {CasosProvider} from "../contexts/casosExito/navInicio.context"
import React from 'react';
import '../styles/card.css'

export default function App({
  Component,
  pageProps: {...pageProps },
}) {
  return (
      <CasosProvider><Component {...pageProps} /></CasosProvider>
  )
}
