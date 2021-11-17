import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GetStarted from "../components/Buttons/GetStarted";
import ButtonOrthoOne from "../components/Buttons/ButtonOrthoOne";
import Technology from "../components/ViewsOrthoOne/Technology";
import Process from "../components/ViewsOrthoOne/Process";
import Specs from "../components/ViewsOrthoOne/Specs";
import Pricing from "../components/ViewsOrthoOne/Pricing";
import FrequentQuestions from "../components/ViewsOrthoOne/FrequentQuestions";
import MoreProductData from "../data/moreproductsimages.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCasos from "../components/Cards/CardCasos";
import CardCasosData from "../data/casosExitos.json";
import CardTeam from "../components/Cards/CardTeam";
import TeamData from "../data/cardTeam.json";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useCasosCtx} from "../contexts/casosExito/navInicio.context"
export default function index() {
  const [activeOrtho, setActiveOrtho] = useState(1);
  /*** manejador de navegacion de orthomaker one */
  const handleActiveOrtho = (id) => {
    setActiveOrtho(id);
  };
    /**** context casos nav */
    const {state,setState}=useCasosCtx();
  /**** manejador de navegacion casos de exito */
  const [activeCase, setActiveCase] = useState(false);
  const handleCasos = () => {
    setState(true);
  };
  /*** responsive selider */
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="text-purple-dark">
      <div className="bg-gradient-to-b from-blue-light to-white -mx-24 px-24">
        <div
          className="-mx-24 px-24 bg-opacity-0"
          style={{
            background: `url("/img/inter.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/***  Header ***/}
          <p className="text-blue-transparent text-3xl">
            Protesis ajustable para <br />
            Extremidades caninas
          </p>
          <div className="flex justify-center">
            <Image
              src="/img/protesis.png"
              width="774px"
              height="565px"
              alt="protesisimage"
            />
          </div>
          {/***  OrthoMaker ***/}
          <div className="mb-2">
            <h2 className="text-9xl text-center">OrthoMaker</h2>
            <div className="flex mt-32">
              <div className="w-1/2 pr-32 flex items-center">
                <div>
                  <h2 className="font-semibold text-5xl mb-4">
                    Como lo <br /> hacemos
                  </h2>
                  <p>
                    We know how stressful it is to leave your pets at home
                    alone. We’re a team of experienced animal caregivers, well
                    connected to local veterinarians. Trust to us to love them
                    like our own, and to keep them safe and happy till you’re
                    home.
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div
                  className="p-6 rounded-lg flex items-center my-2"
                  style={{
                    background: `url("/img/dogOne.png")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-1/5">
                    <Image
                      src="/img/configIcon.png"
                      width="75px"
                      height="75px"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Automatic Integration</h4>
                    <p className="w-4/6">
                      Easy installation and plugins for most popular platforms
                    </p>
                  </div>
                </div>
                <div
                  className="p-6 rounded-lg flex items-center my-2"
                  style={{
                    background: `url("/img/dogTwo.png")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-1/5">
                    <Image src="/img/boxIcon.png" width="75px" height="75px" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Automatic Integration</h4>
                    <p className="w-4/6">
                      Easy installation and plugins for most popular platforms
                    </p>
                  </div>
                </div>
                <div
                  className="p-6 rounded-lg flex items-center my-2"
                  style={{
                    background: `url("/img/dogThree.png")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-1/5">
                    <Image src="/img/feetIcon.png" width="75px" height="75px" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Automatic Integration</h4>
                    <p className="w-4/5">
                      Easy installation and plugins for most popular platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="flex mt-32 mb-4">
              <li className="rounded-full w-14 h-14 border-2 mr-2 flex items-center justify-center border-red-dark">
                <Image src="/img/feet90.png" width="32px" height="28px" />
              </li>
              <li className="rounded-full w-14 h-14 border-2 mx-2 flex items-center justify-center border-red-dark">
                <Image src="/img/feetrecto.png" width="12px" height="38px" />
              </li>
              <li className="rounded-full w-14 h-14 border-2 mx-2 flex items-center justify-center border-red-dark">
                <Image src="/img/prote.png" width="20px" height="35px" />
              </li>
            </ul>
            <span>Protesis</span>
          </div>
        </div>
      </div>
      {/***  OrthoMaker ONE ***/}
      <div className="mb-40">
        <div className="flex justify-between">
          <h2 className="text-5xl font-bold">OrthoMaker ONE</h2>
          <GetStarted />
        </div>
        <div className="-mx-24 my-14">
          <img
            className="w-full"
            src="/img/orthooneback.png"
            alt="orthomaker one"
          />
        </div>
        <div className="flex mt-32">
          <ul className="text-5xl w-2/5 border-l border-purple-light " style={{height:"500px"}}>
            <li style={{marginLeft:"-1px"}} className={activeOrtho==1?"text-purple-dark py-5 border-l-2 border-purple pl-10" :"py-5 text-blue-transparent pl-10"} >
              <ButtonOrthoOne onClick={() => handleActiveOrtho(1)}>
                Tecnology
              </ButtonOrthoOne>
            </li>
            <li style={{marginLeft:"-1px"}} className={activeOrtho==2?"text-purple-dark py-5 border-l-2 border-purple pl-10":"py-5 text-blue-transparent pl-10" }>
              <ButtonOrthoOne onClick={() => handleActiveOrtho(2)}>
                Process
              </ButtonOrthoOne>
            </li>
            <li style={{marginLeft:"-1px"}} className={activeOrtho==3?"text-purple-dark py-5 border-l-2 border-purple pl-10":"py-5 text-blue-transparent pl-10" }>
              <ButtonOrthoOne onClick={() => handleActiveOrtho(3)}>
                Specs
              </ButtonOrthoOne>
            </li>
            <li style={{marginLeft:"-1px"}} className={activeOrtho==4?"text-purple-dark py-5 border-l-2 border-purple pl-10":"py-5 text-blue-transparent pl-10" }>
              <ButtonOrthoOne onClick={() => handleActiveOrtho(4)}>
                Pricing
              </ButtonOrthoOne>
            </li>
            <li style={{marginLeft:"-1px"}} className={activeOrtho==5?"text-purple-dark py-5 border-l-2 border-purple pl-10":"py-5 text-blue-transparent pl-10" }>
              <ButtonOrthoOne onClick={() => handleActiveOrtho(5)}>
                Frequent <br /> questions
              </ButtonOrthoOne>
            </li>
          </ul>
          <div className="w-3/5">
            {activeOrtho == 1 ? (
              <Technology />
            ) : activeOrtho == 2 ? (
              <Process />
            ) : activeOrtho == 3 ? (
              <Specs />
            ) : activeOrtho == 4 ? (
              <Pricing />
            ) : (
              activeOrtho == 5 && <FrequentQuestions />
            )}
          </div>
        </div>
      </div>
      {/***  More Products ***/}
      <div className="flex -mx-24 pb-20">
        <div className="w-1/2 bg-blue-light flex justify-center flex-col px-24 my-8">
          <h2 className="text-2xl mb-4">Productos</h2>
          <h4 className="text-5xl mb-8">Mas productos para ti</h4>
          <p className="w-4/5 text-2xl font-light mb-8">
            Tenemos toda una oferta de productos ortopédicos dedicados a tu
            mascota, productos a la medida de tus necesidades.
          </p>
          <Link href="/">
            <span className="underline flex items-center cursor-pointer">
              <span className="mr-3">ver mas</span>
              <Image src="/img/row.png" width="18px" height="17px" />
            </span>
          </Link>
        </div>
        <div className="w-1/2 grid grid-cols-3 gap-2 -ml-10">
          {MoreProductData.map((mPD) => (
            <div
              key={mPD.id}
              className="col-span-1 h-52 rounded-lg shadow-2xl"
              style={{ background: `url(${mPD.img})`, backgroundSize: "cover" }}
            />
          ))}
        </div>
      </div>
      {/***  Casos de exito ***/}
      <div className="mb-32">
        <h4 className="text-2xl font-light">Casos de exito</h4>
        <hr />
        <div className="flex -mr-24">
          <ul
            className={activeCase || state? "hidden" : "w-3/5 mt-14 text-5xl"}
            style={{
              background: `url("/img/wavesexitos.png")`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <li className="my-4">
              <button onClick={handleCasos}>
                <span className="flex items-center w-64 justify-between">
                  PININA
                  <Image src="/img/rowlonger.png" width="60px" height="50px" />
                </span>
              </button>
            </li>
            <li className="my-4">
              <button onClick={handleCasos}>
                <span className="flex items-center w-64 justify-between">
                  LUNA
                  <Image src="/img/rowlonger.png" width="60px" height="50px" />
                </span>
              </button>
            </li>
            <li className="my-4">
              <button onClick={handleCasos}>
                <span className="flex items-center w-64 justify-between">
                  SIMON
                  <Image src="/img/rowlonger.png" width="60px" height="50px" />
                </span>
              </button>
            </li>
          </ul>
          <div className={!state ? "w-2/5 mt-14 " : "w-full mt-14"}>
          <Carousel responsive={responsive} arrows={state?true:false}>
              {CardCasosData.map((casos) => (
                <CardCasos
                  key={casos.id}
                  img={casos.img}
                  name={casos.name}
                  textOne={casos.textOne}
                  textTwo={casos.textTwo}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/***  TEAM ***/}
      <div className="mb-14">
        <h4 className="text-2xl font-light mb-14">Team</h4>
         <div className="flex">
         {TeamData.map((tData) => (
            <CardTeam
              key={tData.id}
              name={tData.name}
              description={tData.descrption}
              profesion={tData.profesion}
              img={tData.img}
            />
            ))}
         </div>
          
      </div>
      {/***  CONTACTO ***/}
      <div
        className="bg-red-dark text-white mb-16 mt-40 flex"
        style={{ borderRadius: "50px" }}
      >
        <div className="w-3/5 py-10 px-20">
          <h4 className="text-2xl font-light mb-6 text-white-transparent">
            Contacto
          </h4>
          <h4 className="text-5xl">
            Tienes dudas, <br /> habla con nosotros
          </h4>
          <p className="text-2xl font-light my-2">
            En ORTHOMAKER diseñamos y fabricamos prótesis para mascotas
            adaptándonos a las necesidades de cada uno de vosotros. Fabricadas
            para durar con materiales respetuosos con el medio ambiente y a la
            vez cómodos para tu mascota.
          </p>
          <div className="w-96 h-12 rounded-xl bg-blue-light flex">
            <input
              className=" text-purple-dark focus-visible:border-pink-100 px-4 rounded-xl w-4/5 h-full bg-blue-light focus:border-white focus-within:border-white"
              type="mail"
              placeholder="Mail"
            />
            <span className="w-1/5 flex justify-end items-center pr-4">
              <span>
                <Image src="/img/mail.png" width="20px" height="18px"/>
              </span>
            </span>
          </div>
        </div>
        <div className="w-2/5 flex items-end">
          <Image src="/img/dog-contact.png" width="300px" height="300px"/>
        </div>
      </div>
    </div>
  );
}
