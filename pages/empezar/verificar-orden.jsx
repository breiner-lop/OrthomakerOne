import React from "react";
import Link from "next/link";
import ButtonCancelBlueLight from "../../components/Buttons/ButtonCancelBlueLight";
import { useCasosCtx } from "../../contexts/casosExito/navInicio.context";
import Head from "next/head";

export default function VerificarOrden() {
  const { setNavForm } = useCasosCtx();
  var checkout
   React.useEffect(()=>{
    checkout = new WidgetCheckout({
        currency: 'COP',
        amountInCents: 2590000,
        reference: 'wompiinput',
        publicKey: 'pub_test_7pVstX8t7nY6Xup5LOSFL1C6XVhWNrg4',
        redirectUrl: 'https://creativosarte.ddns.net/data/User/kvnxp/home/desktop/wompi/wompitest.html', // Opcional
      //   taxInCents: { // Opcional
      //     vat: 1900,
      //     consumption: 800
      //   },
        customerData: { // Opcional
          email:'edgarjrmalsan@gmail.com',
          fullName: 'Edgardo Maldonado',
          phoneNumber: '3001234567839',
          phoneNumberPrefix: '+57',
          legalId: '123456789',
          legalIdType: 'CC'
        }
      })
   },[])
  return (
    <div className="px-24">
        <Head>
        <script type="text/javascript" src="https://checkout.wompi.co/widget.js"/>
      </Head>
      <div className="flex justify-between text-purple-dark h-20 items-center">
            <div className="flex items-center">
            <Link href="/empezar">
                <button
                className="p-3 mr-4 border border-red-600 rounded-full filter shadow-md transition duration-200 hover:shadow-none"
                onClick={() => setNavForm(8)}
                >
                <img src="/img/rowback.png" alt="rowback" />
                </button>
            </Link>
            <Link href="/">
                <span className="text-2xl cursor-pointer">
                Ortho<strong>Maker</strong>
                </span>
            </Link>
            <span className="mx-4 text-2xl">/</span>
            <span className="text-2xl cursor-pointer text-blue-transparent">
                Datos basicos
            </span>
            </div>
            <div className="flex">
                <button className="bg-purple-dark text-white rounded-lg w-48 h-11 font-semibold shadow-md hover:shadow hover:bg-opacity-95 transition duration-200 flex justify-center items-center" onClick={()=>{checkout.open(function(r){});}}>Realizar pago</button>
            <ButtonCancelBlueLight />
            </div>
      </div>
        <div>
            <h1>fjngrihgiphjpi9</h1>
        </div>
    
    </div>
  );
}
